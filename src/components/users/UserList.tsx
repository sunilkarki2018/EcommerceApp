import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import useAppSelector from "../../hooks/useAppSelector";
import { AppState } from "../../redux/store";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchUsersAsync } from "../../redux/reducers/userReducer";
import ErrorMessage from "../errors/ErrorMessage";
import AccessDenied from "../errors/AccessDenied";

export default function UserList() {
  const { users, currentUser, loading, error } = useAppSelector(
    (state: AppState) => state.user
  );
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [token]);
  const navigate = useNavigate();
  
  if (currentUser && currentUser?.role.includes("customer")) {
    return <AccessDenied />;
  }
  if (!currentUser) {
    navigate("/login");
  }

  if (loading)
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

  return (
    <>
      <Container>
        {currentUser?.role.includes("admin") && (
          <Button
            component={Link}
            to="/userCreate"
            variant="contained"
            color="primary"
            style={{ marginBottom: "40px" }}
          >
            Add User
          </Button>
        )}

        <Typography variant="h4" gutterBottom>
          Users List
        </Typography>
        <Paper elevation={3} style={{ marginTop: "20px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Avatar
                          alt={user?.name || ""}
                          src={user?.avatar || ""}
                          sx={{ width: 50, height: 50 }}
                        />
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        {currentUser?.role.includes("admin") && (
                          <Button
                            component={Link}
                            to={`/userEdit/${user.id}`}
                            size="small"
                            disabled={!currentUser?.role.includes("admin")}
                          >
                            <EditIcon />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}
