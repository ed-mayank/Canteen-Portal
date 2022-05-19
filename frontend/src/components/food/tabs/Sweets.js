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

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Sweets = (props) => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortName, setSortName] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [shop, setShop] = useState("");
  const [foodID, setID] = useState("");
  const [quantity, setQuantity] = useState("");

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value);
  }

  const onChoosingShop = (event) => {
    setShop(event.target.value);
  }

  const onChangeID = (event) => {
    setID(event.target.value);
  };

  const resetInputs = () => {
    setShop("");
    setID("");
    setQuantity("");
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

  const order = (id) => {
    var newOrder;
    {users.map((user, ind) =>
      user._id === id ? 
      (
        newOrder = {
          name: user.name,
          foodType: user.foodType,
          price: user.price,
          veg: user.veg,
          rating: user.rating,
          additional: user.additional,
          shop: shop,
          ordertime: (Date().toLocaleString()).split("GMT",2)[0],
          quantity: user.quantity,
          customerID: localStorage.getItem("buyerID"),
          vendorID: user.vendorID
        }
      ):null
      )}

    axios
      .post("/backend/orderitems/order", newOrder)
      .then((response) => {
        alert("Added\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  }

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

  return (
    <div>
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
                  <TableCell>Quantity</TableCell>
                  <TableCell>Shop</TableCell>
                <TableCell>PlaceOrder</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, ind) => 
                user.foodType === "Sweets" ? 
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
                    <input type="number" min="1" max="5" value={quantity} onChange={onChangeQuantity}/>
                      </TableCell>
                    <TableCell>
                      <Grid item xs={12}>
                        <FormControl size="large" style={{ width: '233px', padding: '10px' }}>
                          <InputLabel id="select-label" >Choose-Shop</InputLabel>
                          <Select
                            labelId="select"
                            id="select"
                            value={shop}
                            label="User"
                            onChange={onChoosingShop}
                            xs={12}
                          >
                            <MenuItem value="JC">JC</MenuItem>
                            <MenuItem value="VC">VC</MenuItem>
                            <MenuItem value="BBC">BBC</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </TableCell>
                    
                    <TableCell>
                      <Grid item xs={12}>
                        <Button variant="contained" onClick={()=>{order(user._id)}}>
                          Order
                        </Button>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ):null
                )}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sweets;
