import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box'

const BuyerEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState("");

  let navigate = useNavigate();
  const user_id = useParams();

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeContact = (event) => {
    setContact(event.target.value);
  }

  const onChangeAge = (event) => {
    setAge(event.target.value);
  }

  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeWallet = (event) => {
    setWallet(event.target.value)
  }

  useEffect(() => {
    const User = {
      user_id : user_id.id,
    };

    axios
      .post("/backend/buyer/buyerfind/",User) // unimplemented
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setContact(res.data.contact);
        setAge(res.data.age);
        setBatch(res.data.batch);
        setPassword(res.data.password);
        setWallet(res.data.wallet);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateBuyer = (event) => {
    const newUser = {
      name:name,
      email:email,
      contact:contact,
      age:age,
      batch:batch,
      password:password,
      wallet:wallet
    };
    console.log(newUser);

    axios
    .post("/backend/buyer/buyerupdate/"+user_id.id,newUser)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

    navigate("/buyerprofile");
  }
  return (
    <Grid container align="center" spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeName}
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
        <FormControl size="large" style={{ width: '233px', padding: '10px' }}>
          <InputLabel id="select-label" >Select-tag</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={batch}
            label="User"
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
          label="Wallet"
          variant="outlined"
          value={wallet}
          onChange={onChangeWallet}
        />
      </Grid>
       <Grid item xs={12}>
        <Button variant="contained" onClick={() => updateBuyer()}>
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default BuyerEdit;
