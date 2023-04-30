import axios from "axios";
import { apiCallUrl } from "./apiUrls";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getItemsThunk = createAsyncThunk(
  "mainStore/itemsLoader",
  async () => {
    const response = await axios.get(apiCallUrl);
    const data = await response.data;
    return data;
  }
);
