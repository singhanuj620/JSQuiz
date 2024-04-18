import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Anuj Singh",
  questionBucket: 10,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail: (state, actions) => {
      const { name, questionBucket } = actions.payload;
      state.name = name
      state.questionBucket = questionBucket
    },
  },
});

export const { setUserDetail } = userSlice.actions;

export default userSlice.reducer;
