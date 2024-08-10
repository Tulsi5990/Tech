import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:kumari20tulsi@gmail.com">
        <Button>Contact: kumari20tulsi@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
