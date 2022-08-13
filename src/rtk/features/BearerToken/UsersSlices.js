import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  Users: [
    {
      id: 0,
      email: '',
      nom: '',
      prenom: '',
      birthDate: '',
      phone: '',
      status: false,
      courses: [''],
    },
  ],
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAll: (state, data) => {
      state.Users = data.payload;
    },
    clear: state => {
      state.Users = [
        {
          id: 0,
          email: '',
          nom: '',
          prenom: '',
          birthDate: '',
          phone: '',
          status: false,
          courses: [''],
        }
      ]
    },
  },
});
const UsersReducer = UsersSlice.reducer;
export default UsersReducer;
export const UsersActions = UsersSlice.actions;
