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


const EditFood = () => {
  const [name, setName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [price, setPrice] = useState("");
  const [veg, setVeg] = useState("");
  const [rating, setRating] = useState("");
  const [additional, setAdditional] = useState([]);
  const [totalUsers, setTotalUsers] = useState("");
  const [temp2, setTemp2] = useState("");
  const [temp3, setTemp3] = useState("");
  const [fid, setFid] = useState("");

  let navigate = useNavigate();
  const food_id = useParams();

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeFoodType = (event) => {
    setFoodType(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  }

  const onChangeVeg = (event) => {
    setVeg(event.target.value);
  }

  const onChangeTemp2 = (event) => {
    setTemp2(event.target.value);
  };

  const onChangeTemp3 = (event) => {
    setTemp3(event.target.value);
  };

  const addAddon = () => {
    const temp = {
      addon: temp2,
      price: temp3
    }
    additional.push(temp);
    setTemp2("");
    setTemp3("");
  }

  const resetAdditional = () => {
    setAdditional([]);
  }

  useEffect(() => {
    const User = {
      food_id: food_id.id,
    };

    axios
      .post("/backend/items/find/", User)
      .then((res) => {
        setName(res.data.name);
        setFoodType(res.data.foodType);
        setPrice(res.data.price);
        setVeg(res.data.veg);
        setRating(res.data.rating);
        setTotalUsers(res.data.totalUsers);
        setAdditional(res.data.additional);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  const EditFood = (event) => {
    
    
    const newFood = {
      name:name,
      foodType:foodType,
      price:price,
      veg:veg,
      rating:rating,
      totalUsers:totalUsers,
      additional:additional,
      vendorID: localStorage.getItem("vendorID")
    };
    console.log(newFood);

    axios
    .post("/backend/items/update/"+food_id.id,newFood)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

    navigate("/vendorprofile/menu");
  }

  return (
    <Grid container align="center" spacing={3}>
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
          label="foodType"
          variant="outlined"
          value={foodType}
          onChange={onChangeFoodType}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={onChangePrice}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl size="large" style={{ width: '233px', padding: '10px' }}>
          <InputLabel id="select-label" >Select-tag</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={veg}
            label="User"
            onChange={onChangeVeg}
            xs={12}
          >
            <MenuItem value="Veg">Veg</MenuItem>
            <MenuItem value="Non-Veg">Nog-Veg</MenuItem>
            <MenuItem value="Both">Both</MenuItem>
          </Select>
        </FormControl>
        
        <Grid item xs={12}>
          <TextField
            label="Add on"
            variant="outlined"
            value={temp2}
            onChange={onChangeTemp2}
          /></Grid>
        <Grid item xs={12} >
          <TextField
            label="Add on Price"
            variant="outlined"
            value={temp3}
            onChange={onChangeTemp3}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() => addAddon()}>
          Update Add on
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() => EditFood()}>
          Edit
        </Button>
      </Grid>
    </Grid>
  )
};

export default EditFood;
