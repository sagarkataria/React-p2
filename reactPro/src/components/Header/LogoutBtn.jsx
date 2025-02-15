import React from 'react'
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config"
import {logout} from "../../appwrite/auth"
function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    } 
  return (
      <div
      className="inline-block px-6 py-2 duration-200 rounded-full hover:bg-blue-100"
      >Logout</div>
  )
}

export default LogoutBtn