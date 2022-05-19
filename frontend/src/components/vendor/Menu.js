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


const VendorMenu = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortName, setSortName] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [shop, setShop] = useState("");
  const [foodID, setID] = useState("");
  const [search, setSearch] = useState("");
  const [delFood, setDelFood] = useState([]);

  const onChoosingShop = (event) => {
    setShop(event.target.value);
  }

  const onChangeID = (event) => {
    setID(event.target.value);
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  }

  const resetInputs = () => {
    setShop("");
    setID("");
    setSearch("");
  }

  useEffect(() => {
    axios
      .get("/backend/items")
      .then((response) => {
        setUsers(response.data);
        setSortedUsers(response.data);
        setSearchText("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


const sortChange = () => {
  let usersTemp = users;
  const flag = sortName;
  usersTemp.sort((a, b) => {
    if (a.date != undefined && b.date != undefined) {
      return (1 - flag * 2) * (new Date(a.name) - new Date(b.name));
    } else {
      return 1;
    }
  });
  setUsers(usersTemp);
  setSortName(!sortName);
};

const customFunction = (event) => {
  console.log(event.target.value);
  setSearchText(event.target.value);
};

const AddFood = (event) => {
  navigate("/vendorprofile/food")
}

const EditFood = (id) => {
  navigate("/vendorprofile/menu/editfood/" + id)
}

const DeleteFood = (id) => {
  axios.delete('/backend/items/delete/'+id)
    .then(response => { 
      console.log(response.data);
    });
    // setDelFood(delFood.filter(el => el._id !== id));
    window.location.reload();
};
  return (
    <div>
      <Box style={{textAlign:"right"}}>
      <Button variant="contained" onClick={AddFood}>
        Add Food
      </Button>
      </Box>
      <Grid container>
        <Grid item xs={12} md={9} lg={9}>
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {/* <TableCell> Sr No.</TableCell> */}
                  <TableCell>Name</TableCell>
                  <TableCell>foodType</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Veg/Non-Veg</TableCell>
                  <TableCell>rating</TableCell>
                  <TableCell>AddON</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, ind) =>
                  user.vendorID == localStorage.getItem("vendorID") ?
                    (
                      //{{ user.foodType } === "Drinks" &&
                      <TableRow key={ind}>
                        {/* <TableCell>{user._id}</TableCell> */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.foodType}</TableCell>
                        <TableCell>{user.price}</TableCell>
                        <TableCell>{user.veg}</TableCell>
                        <TableCell>{user.rating}</TableCell>
                        <TableCell>{user.additional.map((current_object, i) => {
                      return <li key={i}>{current_object.addon}, price:{current_object.price}</li>
                    })}</TableCell>
                    
                        <TableCell> 
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={() =>{EditFood(user._id)}} value={user._id}>Edit</Button>
                          </Grid>
                        </TableCell>
                         <TableCell>
                          <Grid item xs={12}>
                            <Button variant="contained" onClick={() =>{DeleteFood(user._id)}} value={user._id}>Delete</Button>
                          </Grid>
                        </TableCell>
                      </TableRow>
                      
                    ) : null
                )}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  };


export default VendorMenu;
