import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user,setUser] = useState("");


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeUser = (event) => {
        setUser(event.target.value);
      }

    const resetInputs = () => {
        setUser("");
        setEmail("");
        setPassword("");
    };

    const vendorLogin = (event) => {
        event.preventDefault();

        const newUser = {
            email: email,
            password: password
        };
        

        axios
            .post("/backend/vendor/login", newUser)
            .then((response) => {
              if(response.data != null){
                var Email = localStorage.getItem("vendorEmail");
              if(Email){
                localStorage.removeItem("vendorEmail");
                localStorage.removeItem("vendorID");
              }
              localStorage.setItem("vendorEmail",email)
              localStorage.setItem("vendorID",response.data._id)
                alert("Login Successful!!")
                navigate("/vendorprofile");
              }
              else{
                alert("Invalid Credentials")
              }
            })
            .catch((error)=>{
                console.log(error);
            });

        resetInputs();
    };

    const buyerLogin = (event) => {
      event.preventDefault();

      const newUser = {
          email: email,
          password: password
      };
      

      axios
          .post("/backend/buyer/login", newUser)
          .then((response) => {
            if(response.data != null){
              var Email = localStorage.getItem("buyerEmail");
              if(Email){
                localStorage.removeItem("buyerEmail");
                localStorage.removeItem("buyerID");
              }

              localStorage.setItem("buyerEmail",email)
              localStorage.setItem("buyerID",response.data.buyerLogin._id)

              alert("Login Successful!!")
              navigate("/buyerprofile");
            }
            else{
              alert("Invalid Credentials")
            }
          })
          .catch((error)=>{
              console.log(error);
          });

      resetInputs();
  };

    return (
        <Grid container align="center" spacing={3}>
      <Grid item xs={12}>
        <FormControl size="large" style={{ width: '40%' }}>
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
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={buyerLogin}>
              LogIn
            </Button>
          </Grid>
        </Grid>
      }
      {user === "Vendor" &&
        <Grid container align={"center"} spacing={2}>
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
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={vendorLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
      }
    </Grid>
    );
};

export default Login;