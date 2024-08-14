import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:{
      email: "",
      name: "",
      password: "",
      aadhar: null,
      age: null,
      role: "",
      address: {
          state: "",
          city: "",
          area: ""
      },
    },
    jobsPosted:[],
    userLoading:true
  },
  reducers: {
    setUser: (state,action)=>{
        state.user = action.payload
    },
    setJobsPosted:(state,action)=>{
        state.jobsPosted = action.payload
    },
    setUserLoading:(state,action) =>{
      state.userLoading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setJobsPosted , setUserLoading } = userSlice.actions

export default userSlice.reducer