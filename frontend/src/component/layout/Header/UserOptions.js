import React, { Fragment, useState, useRef, useEffect } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@mui/lab";
import Backdrop from "@mui/material/Backdrop";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch ,useSelector} from "react-redux";

const UserOptions = ({ user }) => {

  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const speedDialRef = useRef(null);

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/admin/dashboard");
  }

  function orders() {
    navigate("/orders");
  }

  function account() {
    navigate("/account");
  }
  function cart() {
    navigate("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpen(false);
    }, 50000); // Delay to allow moving cursor to actions
  };

  const handleActionMouseEnter = () => {
    setOpen(true);
  };

  const handleActionMouseLeave = () => {
    setTimeout(() => {
      setOpen(false);
    }, 50000); // Delay to allow moving cursor back to SpeedDial
  };

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <div
        ref={speedDialRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          style={{ zIndex: "11" }}
          open={open}
          direction="down"
          className="speedDial"
          icon={
            <img
              className="speedDialIcon"
              src={user.avatar.url ? user.avatar.url : "/Profile.png"}
              alt="Profile"
            />
          }
        >
          {options.map((item) => (
            <SpeedDialAction
              key={item.name}
              icon={item.icon}
              tooltipTitle={item.name}
              onClick={item.func}
              tooltipOpen={window.innerWidth <= 600}
              onMouseEnter={handleActionMouseEnter}
              onMouseLeave={handleActionMouseLeave}
            />
          ))}
        </SpeedDial>
      </div>
    </Fragment>
  );
};

export default UserOptions;
