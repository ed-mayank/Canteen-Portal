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

const VendorProfile = () => {
  const navigate = useNavigate();
  const [vendors,setVendors] = useState([]);  

  useEffect(() => {
    axios
      .get("/backend/vendor")
      .then((response) => {
        setVendors(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var name,email,contact,shop,opentime,closetime,vid;
  {
    vendors.map((vendor, ind) =>
    vendor._id == localStorage.getItem("vendorID") ?
      ( 
       name = vendor.name,
       email = vendor.email,
       contact = vendor.contact,
       shop = vendor.shop,
       opentime = vendor.opentime,
       closetime = vendor.closetime,
       vid = vendor._id
      ) :null
  )}

  const EditVendor = (id) => {
    navigate("/vendorprofile/editvendor/" + id)
  }

  return (
    <div style={{textAlign:"center", font:"initial", fontSize:"60px", padding:"5px"}}>
      <Box>Name: {name}</Box>
      <Box>Email: {email}</Box>
      <Box>Contact: {contact}</Box>
      <Box>Shop: {shop}</Box>
      <Box>Opentime: {opentime}</Box>
      <Box>Closetime: {closetime}</Box>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() =>{EditVendor(vid)}}>Edit</Button>
      </Grid>
    </div>
  );
  };


export default VendorProfile;
