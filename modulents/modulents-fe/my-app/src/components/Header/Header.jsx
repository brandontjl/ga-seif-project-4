import React from "react"
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Header = ({ active, setActive }) => {
    const { logoutSuccess, getUserFromToken } = useContext(AuthContext);
    const user = getUserFromToken();

    return (
        <>
            <div className="header" >
                < img style={{
                    height: 100,
                    width: 100,
                }} src="https://i.imgur.com/ZZh5iBc.png" alt="modulentslogo" ></img>
                <h1> Modulents - Find and Build your A-team</h1>
                <h2>{user.name}</h2>
                {/* <li onClick={logoutSuccess}>{logout} Log Out</li> */}
            </div >
        </>
    )

}

export default Header