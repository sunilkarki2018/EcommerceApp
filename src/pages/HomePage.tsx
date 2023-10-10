import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Paper, Typography } from "@mui/material";

import useAppSelector from "../app/hooks/useAppSelector";
import { AppState } from "../app/redux/store";
import useAppDispatch from "../app/hooks/useAppDispatch";
import ProductSearch from "../features/products/ProductSearch";
import { fetchAllProductsAsync } from "../app/redux/reducers/productReducer";
import { ProductCardList } from "../features/products/ProductCardList";
import { fetchAllCategoriesAsync } from "../app/redux/reducers/categoryReducer";
import CategorySearch from "../features/category/CategorySearch";
import ProductSort from "../features/products/ProductSort";
import { executeSearchandSort } from "../app/functions/getFilteredAndSort";
import { Product } from "../app/types/Product/Product";
import ErrorMessage from "../app/errors/ErrorMessage";

export const HomePage = () => {
  const { productsList, listLoading, error } = useAppSelector(
    (state: AppState) => state.product
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
    dispatch(fetchAllCategoriesAsync());
  }, []);

  useEffect(() => {
    const filteredResult = executeSearchandSort(
      productsList,
      searchText,
      categoryId,
      sortOrder
    );
    setFilteredProducts(filteredResult);
  }, [productsList, searchText, categoryId, sortOrder]);

  if (listLoading)
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={64} color="secondary" />
      </Box>
    );

  if (error) return <ErrorMessage message={error} />;

  const handleSearch = (searchKey: string) => {
    setSearchText(searchKey);
  };

  const handleCategorySearch = (searchCategoryId: number) => {
    setCategoryId(searchCategoryId);
  };

  const sortHandler = (sortOrder: string) => {
    setSortOrder(sortOrder);
  };

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={3} style={{ position: "fixed" }}>
        <Typography variant="h6" gutterBottom>
         Filter
        </Typography>
          <Paper sx={{ mb: 2 }}>
            <ProductSearch onSearch={handleSearch} />
          </Paper>
          <Paper sx={{ mb: 2 }}>
            <CategorySearch onCategorySearch={handleCategorySearch} />
          </Paper>
          <Paper sx={{ mb: 2 }}>
            <ProductSort onSort={sortHandler} />
          </Paper>
        </Grid>
        <Grid item xs={3}>          
        </Grid>
        <Grid item xs={9}>
          {productsList.length > 0 && (
            <ProductCardList products={filteredProducts} />
          )}
        </Grid>
      </Grid>
    </>
  );
};
