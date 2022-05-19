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

const VendorEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [shop, setShop] = useState("");
  const [opentime, setOpentime] = useState("");
  const [closetime, setClosetime] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const vendor_id = useParams();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeContact = (event) => {
    setContact(event.target.value);
  }

  const onChangeOpentime = (event) => {
    setOpentime(event.target.value);
  }

  const onChangeClosetime = (event) => {
    setClosetime(event.target.value);
  }

  const onChangeShop = (event) => {
    setShop(event.target.value);
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  useEffect(() => {
    const User = {
      vendor_id : vendor_id.id,
    };

    axios
      .post("/backend/vendor/vendorfind/",User) // unimplemented
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setContact(res.data.contact);
        setShop(res.data.shop);
        setOpentime(res.data.opentime);
        setPassword(res.data.password);
        setClosetime(res.data.closetime)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateVendor = (event) => {
    const newUser = {
      name:name,
      shop:shop,
      email:email,
      contact:contact,
      opentime:opentime,
      closetime:closetime,
      password:password
    };
    console.log(newUser);

    axios
    .post("/backend/vendor/vendorupdate/"+vendor_id.id,newUser)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

    navigate("/vendorprofile");
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
          label="Shop"
          variant="outlined"
          value={shop}
          onChange={onChangeShop}
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
        <Button variant="contained" onClick={() => updateVendor()}>
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default VendorEdit;
