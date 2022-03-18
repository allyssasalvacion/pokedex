import React from "react";
import "./Search.css";

import { TextField } from "@mui/material";

function Search() {
  return (
    <div className="search">
      <TextField
        fullWidth
        label=""
        id="fullWidth"
        placeholder="Search your pokemon"
      />
    </div>
  );
}

export default Search;
