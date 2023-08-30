import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

// to edit base_url
const BASE_URL = "https://expense-tracker-bzs3.onrender.com/api";

const GlobalContext = createContext();

// need to edit this portion
const addProject = async (project) => {
    await axios
        .post(`${BASE_URL}/project/create`, project, {
            headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
        })
        .then((res) => {
            console.info(">>> create record res: ", res);
            getProject(); // check this
        })
        .catch((error) => {
            console.error((error) => {
                console.error(">>> create record error: ", error);
                setError(error.response.data.message);
            });
        });
};

const getProject = async () => {
    await axios.get(`${BASE_URL}/project/display`, project, {
        headers: {
            Authorization: `Bearer ${Cookies.get("userAuthToken")}`
        },
    })
        .then((res) => {
            console.info(">>> get portfolio res: ", res);
        })
        .catch((err) => {
            console.error(">>> get portfolio error: ", err)
        })
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};