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
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'

const BuyerProfile = () => {
  const navigate = useNavigate();
  const [buyers,setBuyers] = useState([]);  

  useEffect(() => {
    axios
      .get("/backend/buyer")
      .then((response) => {
        setBuyers(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var name,email,contact,age,batch,bid,wallet;
  {
    buyers.map((buyer, ind) =>
    buyer._id == localStorage.getItem("buyerID") ?
      ( 
       name = buyer.name,
       email = buyer.email,
       contact = buyer.contact,
       age = buyer.age,
       batch = buyer.batch,
       bid = buyer._id,
       wallet = buyer.wallet
      ) :null
  )}

  const EditBuyer = (id) => {
    navigate("/buyerprofile/editbuyer/" + id)
  }

  return (
    <div style={{textAlign:"center", font:"initial", fontSize:"60px", padding:"40px"}}>
      <Box>Name: {name}</Box>
      <Box>Email: {email}</Box>
      <Box>Contact: {contact}</Box>
      <Box>Age: {age}</Box>
      <Box>Batch: {batch}</Box>
      <Box>Wallet: {wallet}</Box>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() =>{EditBuyer(bid)}}>Edit</Button>
      </Grid>
    </div>
  );
  };


export default BuyerProfile;
