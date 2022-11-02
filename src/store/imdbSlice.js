import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  datas: [],
  error: ""
}

export const imdbSlice = createSlice({
  name: 'imdb',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    }).addCase(fetchData.fulfilled, (state, action) => {
      state.datas = action.payload;
      state.loading = false;
      state.error = false;
    }).addCase(fetchData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
  }
});

export default imdbSlice.reducer;

// const options = {
//   headers: {
//     'X-RapidAPI-Key': 'c2bedd75d9mshed5cc3741fe3106p178fd4jsnb8d6fd4ddc16',
//     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//   }
// };

const options = {
  headers: {
    'X-RapidAPI-Key': '7bd74ebf01msh52944dea6996d43p196e9ejsnc056422bf23e',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

//Thunk
export const fetchData = createAsyncThunk(
  'imdb/fetchData',
  async (name, {rejectWithValue}) => {
    try {
      const { data: { d } } = await axios.get(`https://imdb8.p.rapidapi.com/auto-complete?q=${name}`, options);
      //console.log(d);
      return d;
    } catch (err) {
      //console.log("err", err.response.data.message);
      return rejectWithValue(err.response.data.message);
    }
  }
)
