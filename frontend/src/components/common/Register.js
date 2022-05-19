import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from "@mui/material";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [contact, setContact] = useState(null);
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState("");
  const [shop,setShop] = useState("");
  const [opentime,setOpentime] = useState("");
  const [closetime,setClosetime] = useState("");
  const [wallet, setWallet] = useState("");

  const onChangeShop = (event) => {
    setShop(event.target.value);
  }

  const onChangeOpentime = (event) => {
    setOpentime(event.target.value);
  }

  const onChangeClosetime = (event) => {
    setClosetime(event.target.value);
  }

  const onChangeUser = (event) => {
    setUser(event.target.value);
  }

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeContact = (event) => {
    setContact(event.target.value);
  }

  const onChangeAge = (event) => {
    setAge(event.target.value);
  }

  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeWallet = (event) => {
    setWallet(event.target.value);
  }

  const resetInputs = () => {
    setUser("");
    setName("");
    setEmail("");
    setContact("");
    setDate(null);
    setAge("");
    setBatch("");
    setPassword("");
    setShop("");
    setOpentime("");
    setClosetime("");
    setWallet("");
  };

  const buyerSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      contact: contact,
      age: age,
      batch: batch,
      password: password,
      date: Date.now(),
      wallet: wallet
    };

    axios
      .post("/backend/buyer/register", newUser)
      .then((response) => {
        alert("Registered Successfully");
      });

    resetInputs();
  };

  const vendorSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      shop: shop,
      email: email,
      contact: contact,
      opentime: opentime,
      closetime: closetime,
      password: password
    };
    
    axios
      .post("/backend/vendor/register", newUser)
      .then((response) => {
        alert("Registered Successfully");
      });

    resetInputs();
  };

  return (
    <Grid container align="center" spacing={3}>
      <Grid item xs={12}>
        <FormControl size="large" style={{ width: '40%',padding: '10px'}}>
          <InputLabel id="select-label" >Select-User</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={user}
            label="User"
            onChange={onChangeUser}
            xs={12}
          >
            <MenuItem value="Buyer">Buyer</MenuItem>
            <MenuItem value="Vendor">Vendor</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {user === "Buyer" &&
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact"
              variant="outlined"
              value={contact}
              onChange={onChangeContact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeAge}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl size="large" style={{ width: '13%' }}>
            <InputLabel id="select-label" >Select-Batch</InputLabel>
            <Select
              labelId="select"
              id="select"
              value={batch}
              label="Batch"
              onChange={onChangeBatch}
              xs={12}
            >
              <MenuItem value="UG1">UG1</MenuItem>
              <MenuItem value="UG2">UG2</MenuItem>
              <MenuItem value="UG3">UG3</MenuItem>
              <MenuItem value="UG4">UG4</MenuItem>
              <MenuItem value="UG5">UG5</MenuItem>
            </Select>
        </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Wallet"
              variant="outlined"
              value={wallet}
              onChange={onChangeWallet}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={buyerSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      }
      {user === "Vendor" &&
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Mangager Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
          <FormControl size="large" style={{ width: '13%' }}>
            <InputLabel id="select-label" >Select-Shop</InputLabel>
            <Select
              labelId="select"
              id="select"
              value={shop}
              label="Shop"
              onChange={onChangeShop}
              xs={12}
            >
              <MenuItem value="JC">JC</MenuItem>
              <MenuItem value="BBC">BBC</MenuItem>
              <MenuItem value="VC">VC</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
        </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact"
              variant="outlined"
              value={contact}
              onChange={onChangeContact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Opentime"
              variant="outlined"
              value={opentime}
              onChange={onChangeOpentime}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Closetime"
              variant="outlined"
              value={closetime}
              onChange={onChangeClosetime}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={vendorSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      }
    </Grid>
  );
};

export default Register;
