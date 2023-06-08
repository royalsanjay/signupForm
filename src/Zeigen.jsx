import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormDialog({
  opens,
  handleCloses,
  handleClose,
  handleClickOpen,
}) {
  // const FormDialog = ({ opens, handleCloses }) => {
  const notify = (str) => toast(str);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    axios
      .post(
        "https://orgfeeder-backend.onrender.com/orgFeeder/api/user/login",
        {
          email: email,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        handleCloses();
      })
      .catch((error) => {
        console.log(error);
        notify("Error !");
      });

    // console.log(email, password);
  };
  return (
    <div>
      {/* <form onSubmit={submit}> */}
      <Dialog open={opens} onClose={handleCloses}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogContentText>
          You don't have an account yet ?
          <Link
            onClick={() => {
              handleCloses();
              handleClickOpen();
            }}
          >
            {" "}
            Sign Up
          </Link>
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleCloses}>Cancel</Button>
          <Button onClick={() => submit()}>Login</Button>
        </DialogActions>
      </Dialog>
      {/* </form> */}
      <ToastContainer />
    </div>
  );
}
