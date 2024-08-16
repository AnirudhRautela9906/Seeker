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
    userLoading:true,
    jobsApplied : []
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
    },
    setJobsApplied:(state,action)=>{
      state.jobsApplied = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setJobsPosted , setUserLoading , setJobsApplied } = userSlice.actions

export default userSlice.reducer