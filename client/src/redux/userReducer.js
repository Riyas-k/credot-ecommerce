import { createSlice } from "@reduxjs/toolkit";

const singleUser=createSlice({
    name:"userData",
    initialState:{
        token:"",
        userData:{}  
    },
    reducers:{
        setUserDetails:(state,action)=>{

            console.log(action.payload,"ppppppppppppppppppppppppppppppppp");

            state.userData = action.payload
            console.log(state.userData,"dataaaaaaaaaaaaaaaaaaaa");
        },
        setTokens:(state,action)=>{
            console.log(action.payload,'tokeennnnnnnn');
            state.token=action.payload
        },
          logoutUser: (state) => {
            localStorage.removeItem("userAccessToken");
            localStorage.removeItem("name");
            state.userData = {};
            state.token='' // Reset user data when logging out
        },
    }
});


  
  export const { setUserDetails,logoutUser,setTokens} = singleUser.actions;
  export default singleUser.reducer ;