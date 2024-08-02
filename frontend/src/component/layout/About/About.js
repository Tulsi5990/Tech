import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../../images/TechTrove_logo_Black.png"; // Assuming logo is in the images folder

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo} // Updated with logo
              alt="Founder"
            />
            <Typography>Tulsi Kumari</Typography> {/* Updated name */}
            <span>
              Welcome to our e-commerce platform, where we offer a wide range of cutting-edge gadgets to suit all your tech needs. Our mission is to provide the latest and most innovative electronic products, ensuring quality and affordability. Explore our diverse selection and experience the future of technology today.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            {/* Removed links, only icons displayed */}
            <InstagramIcon className="instagramSvgIcon" />
            <YouTubeIcon className="youtubeSvgIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
