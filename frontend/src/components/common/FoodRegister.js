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
import { useNavigate } from "react-router-dom";
const FoodRegister = (props) => {

  const [name, setName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [price, setPrice] = useState("");
  const [veg, setVeg] = useState("");
  const [rating, setRating] = useState("");
  const [additional, setAdditional] = useState([]);
  
  const [temp2, setTemp2] = useState("");
  const [temp3, setTemp3] = useState("");

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

  const resetInputs = () => {
    setName("");
    setFoodType("");
    setPrice("");
    setVeg("");
    setTemp2("");
    setTemp3("");
  };

  const foodSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      foodType: foodType,
      price: price,
      veg: veg,
      additional: additional,
      vendorID: localStorage.getItem("vendorID")
    };

    axios
      .post("/backend/items/food", newUser)
      .then((response) => {
        alert(response.data.name + " added Successfully");
        console.log(response.data);
      });

    resetInputs();
  };

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
      <FormControl size="large" style={{ width: '233px', padding: '10px' }}>
          <InputLabel id="select-label" >Select-tag</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={foodType}
            label="User"
            onChange={onChangeFoodType}
            xs={12}
          >
            <MenuItem value="Drinks">Drinks</MenuItem>
            <MenuItem value="Noodles">Noodles</MenuItem>
            <MenuItem value="Sweets">Sweets</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
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
          <InputLabel id="select-label" >Select-Food Type</InputLabel>
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
        <Button variant="contained" onClick={addAddon}>
          Update Add on
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={foodSubmit}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default FoodRegister;