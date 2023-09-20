import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types/Product";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { AppState } from "../../redux/store";
import { fetchSingleProductsAsync } from "../../redux/productReducer";
import Carousel from "react-material-ui-carousel";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { singleLoading, productsSingle } = useAppSelector(
    (state: AppState) => state.productReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleProductsAsync({ productId: id! }));
  }, [id]);

  if (singleLoading)
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

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Carousel>
          {productsSingle?.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${productsSingle?.title} Image ${index + 1}`}
              style={{ width: "100%" }}
            />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{productsSingle?.title}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${productsSingle?.price}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody sx={{ fontSize: "1.1em" }}>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>{productsSingle?.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{productsSingle?.description}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}