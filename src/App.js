import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";

import GridUser from "./components/ListUser/GridUser";
import Header from "./components/Header/index";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {

  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.replace("/login");
    }
  });

  return (
    <div className="App">
      <Header />
      <Stack spacing={2} direction="row" style={{ padding: "30px 20px", textAlign: "left" }}
      >
        <Button variant="outlined">Sửa người dùng</Button>
        <Button variant="contained" color="success">Thêm người dùng</Button>
        <Button variant="outlined" color="error">Xóa người dùng</Button>
      </Stack>

      <GridUser />
      <Route>
        <Redirect to="/" />
      </Route>
    </div>
  );
}

export default App;

