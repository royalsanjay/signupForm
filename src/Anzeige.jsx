import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useState } from "react";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function FormDialog({ open, handleClose }) {
  const notify = () => toast();
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");

  const submit = () => {
    axios
      .post(
        "https://orgfeeder-backend.onrender.com/orgFeeder/api/user/register",
        {
          fullName: fullName,
          username: userName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        handleClose();
      })
      .catch((error) => {
        notify("Error !");
        console.log(error);
      });

    // console.log(fullName, userName, Email, Password, Phonenumber);
  };
  return (
    <div>
      {" "}
      <form>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To register to this website, please enter your information here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="fullname"
              label="Full Name"
              type="name"
              fullWidth
              variant="standard"
              onChange={(e) => setfullName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="userName"
              label="Username"
              type="name"
              fullWidth
              variant="standard"
              onChange={(e) => setuserName(e.target.value)}
            />
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
            <TextField
              autoFocus
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              type="phoneNumber"
              fullWidth
              variant="standard"
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </DialogContent>
          <DialogContentText>
            Already have an Account ?<Link to="/zeigen"> Login</Link>
            {/* <a href="/zeigen">Login</a> */}
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={submit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </form>
      <ToastContainer />
    </div>
  );
}
