import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BuyerNav = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Canteen Portal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/buyerprofile")}>
            Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyerprofile/foodlist")}>
            Dashboard
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/buyerprofile/buyeredit")}>
            Edit Profile
          </Button> */}
          <Button color="inherit" onClick={() => navigate("/buyerprofile/favourites")}>
            Favourites
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyerprofile/myorder")}>
            My Orders
          </Button>
          <Button color="inherit" onClick={() => navigate("/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BuyerNav;
