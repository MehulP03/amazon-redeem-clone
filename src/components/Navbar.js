import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

function Navbar() {
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="header">
        <img className="header__logo" src="/assets/logo.PNG" alt="logo" />
        <div>
          <div className="location-button">
            <div>
              <LocationOnOutlinedIcon />
            </div>
            <div>
              Deliver to
              <br />
              <span style={{ fontSize: "12px", fontWeight: "700" }}>U.S.A</span>
            </div>
          </div>
        </div>
        <div className="header__search">
          <Box>
            <FormControl
              fullWidth
              sx={{ maxHeight: "150px", background: "#C5C5C5" }}
            >
              <Select
                labelId="category"
                id="category"
                value={category}
                label="Category"
                displayEmpty
                onChange={handleChange}
                className="header__select_category"
                sx={{
                  background: "#C5C5C5"
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="All Departments">All Departments</MenuItem>
                <MenuItem value="Arts & Crafts">Arts & Crafts</MenuItem>
                <MenuItem value="Automotive">Automotive</MenuItem>
                <MenuItem value="Baby">Baby</MenuItem>
                <MenuItem value="Beauty & Personal Care">
                  Beauty & Personal Care
                </MenuItem>
                <MenuItem value="Books">Books</MenuItem>
                <MenuItem value="Boys' Fashion">Boys' Fashion</MenuItem>
                <MenuItem value="Computers">Computers</MenuItem>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="All Departments">All Departments</MenuItem>
                <MenuItem value="Arts & Crafts">Arts & Crafts</MenuItem>
                <MenuItem value="Automotive">Automotive</MenuItem>
                <MenuItem value="Baby">Baby</MenuItem>
                <MenuItem value="Beauty & Personal Care">
                  Beauty & Personal Care
                </MenuItem>
                <MenuItem value="Books">Books</MenuItem>
                <MenuItem value="Boys' Fashion">Boys' Fashion</MenuItem>
                <MenuItem value="Computers">Computers</MenuItem>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="All Departments">All Departments</MenuItem>
                <MenuItem value="Arts & Crafts">Arts & Crafts</MenuItem>
                <MenuItem value="Automotive">Automotive</MenuItem>
                <MenuItem value="Baby">Baby</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* </div> */}
          <input className="header__searchInput" type="text" />
          <a href="/" className="header__searchIcon">
            <SearchIcon />
          </a>
        </div>

        <div>
          <Box>
            <FormControl fullWidth sx={{color: '#fff'}}>
              <Select
                labelId="category"
                id="category"
                value={location}
                label="Category"
                displayEmpty
                onChange={handleChangeLocation}
                className=""
                
              >
                <MenuItem value="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_the_United_States_%281822-1836%29.svg" alt="flag" height={20} width={30} />
                </MenuItem>
                <MenuItem value="All Departments">All Departments</MenuItem>
                <MenuItem value="Arts & Crafts">Arts & Crafts</MenuItem>
                <MenuItem value="Automotive">Automotive</MenuItem>
                <MenuItem value="Baby">Baby</MenuItem>
                <MenuItem value="Beauty & Personal Care">
                  Beauty & Personal Care
                </MenuItem>
                <MenuItem value="Books">Books</MenuItem>
                <MenuItem value="Boys' Fashion">Boys' Fashion</MenuItem>
                <MenuItem value="Computers">Computers</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Sign in</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
        <div src="" className="cart__image" ></div>
          {/* <img src="https://ik.imagekit.io/amazon1234/sprite_350x_q7QZkJCVl.png?updatedAt=1627121934264" alt="cart"/> */}
          <span className="header__optionLineTwo header__basketCount">
            cart
          </span>
        </div>
    </div>
  );
}

export default Navbar;


// <span className="header__optionLineOne">Hello, Sign in</span>