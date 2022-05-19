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

const statusTabs = [
  {
    id: 1,
    name: "PLACED",
  },
  {
    id: 2,
    name: "ACCEPTED",
  },
  {
    id: 3,
    name: "COOKING",
  },
  {
    id: 4,
    name: "READY FOR PICKUP",
  },
  {
    id: 5,
    name: "COMPLETED",
  },
]

var i = 0;

const MyOrder = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [food,setFood] = useState([]);
  const [shop, setShop] = useState("");
  const [foodID, setID] = useState("");
  const [delFood, setDelFood] = useState([]);
  const [reject,setReject] = useState("Reject");


  const [status, setStatus] = useState("Status");



const statusButton = () => {
  setReject("REJECT")
  i = (i+1)%6
  if(i==0){
    setStatus("STATUS")
  }
  if(i==1){
    setStatus("PLACED")
  }
  if(i==2){
    setStatus("ACCEPTED")
  }
  if(i==3){
    setStatus("COOKING")
  }
  if(i==4){
    setStatus("READY FOR PICKUP")
  }
  if(i==5){
    setStatus("COMPLETED")
  }
}


const rejectButton = ()=> {
  setReject("Rejected")
  setStatus("Status")
  i=0
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
  }

  useEffect(() => {


    axios
      .get("/backend/orderitems")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={9} lg={9}>
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {/* <TableCell> Sr No.</TableCell> */}
                  <TableCell>Customer</TableCell>
                  <TableCell>Food Item</TableCell>
                  <TableCell>Food ID</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Placed Time</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, ind) =>
                user.customerID == localStorage.getItem("buyerID") ?
                (
                  <TableRow key={ind}>
                    <TableCell>{user.customerID}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.quantity}</TableCell>
                    <TableCell>{user.ordertime}</TableCell>
                    <TableCell>
                    <Grid item xs={12}>
                            <Button variant="contained" >{localStorage.getItem("status")}</Button>
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


export default MyOrder;
