import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";

const BASE_URL = "http://localhost:3000/api";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // const [incomes, setIncomes] = useState([]);
    const [project, setProject] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [error, setError] = useState(null);

    // Portfolio
    const addPortfolio = async (portfolio) => {
        await axios
            .post(`${BASE_URL}/portfolio/create`, portfolio, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> create portfolio res: ", res);
                getPortfolio();
            })
            .catch((error) => {
                console.error((error) => {
                    console.error(">>> create portfolio error: ", error);
                    setError(error.response.data.message);
                });
            });
    };

    const getPortfolio = async () => {
        await axios
            .get(`${BASE_URL}/portfolio/display`, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> get portfolio res: ", res);
                setPortfolio()
            })
            .catch((error) => {
                console.error(">>> get portfolio error: ", error);
                setError(error.response.data.message);
            });
    };

    const deletePortfolio = async (id) => {
        await axios
            .post(`${BASE_URL}/portfolio/deleteRecord/${id.id}`, id, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> delete portfolio res: ", res);
                getPortfolio();
            })
            .catch((error) => {
                console.error(">>> delete portfolio error: ", error);
            });
    };

    const updatePortfolio = async (id, portfolio) => {
        await axios
            .post(`${BASE_URL}/portfolio/update/${id}`, portfolio, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> update portfolio res: ", res);

                // Fetch the updated list of portfolio records
                getPortfolio();
            })
            .catch((err) => {
                console.error(">>> update portfolio error: ", err);
                setError(error.response.data.message);
            });
    };
    // Projects
    const addProject = async (project) => {
        await axios
            .post(`${BASE_URL}/project/create`, project, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> create project res: ", res);
                getProject();
            })
            .catch((error) => {
                console.error((error) => {
                    console.error(">>> create project error: ", error);
                    setError(error.response.data.message);
                });
            });
    };

    const getProject = async () => {
        await axios
            .get(`${BASE_URL}/project/display`, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> get project res: ", res);
                setProject()
            })
            .catch((error) => {
                console.error(">>> get project error: ", error);
                setError(error.response.data.message);
            });
    };

    const deleteProject = async (id) => {
        await axios
            .post(`${BASE_URL}/project/deleteRecord/${id.id}`, id, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> delete project res: ", res);
                getProject();
            })
            .catch((error) => {
                console.error(">>> delete project error: ", error);
            });
    };

    const updateProject = async (id, project) => {
        await axios
            .post(`${BASE_URL}/project/update/${id}`, project, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> update project res: ", res);

                // Fetch the updated list of portfolio records
                getProject();
            })
            .catch((err) => {
                console.error(">>> update project error: ", err);
                setError(error.response.data.message);
            });
    };

    // // <----------- Incomes ---------->
    // const addIncome = async (income) => {
    //     await axios
    //         .post(`${BASE_URL}/income`, income, {
    //             headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
    //         })
    //         .then((res) => {
    //             console.info(">>> create income res: ", res);
    //             getIncome();
    //         })
    //         .catch((error) => {
    //             console.error((error) => {
    //                 console.error(">>> create income error: ", error);
    //                 setError(error.response.data.message);
    //             });
    //         });
    // };

    // const getIncome = async () => {
    //     await axios
    //         .get(`${BASE_URL}/income`, {
    //             headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
    //         })
    //         .then((res) => {
    //             console.info(">>> get income res: ", res);
    //             const sortedIncome = res.data.sort((a, b) => {
    //                 return new Date(b.date) - new Date(a.date);
    //             });
    //             setIncomes(sortedIncome);
    //             getMonthlyIncome(sortedIncome);
    //         })
    //         .catch((error) => {
    //             console.error((error) => {
    //                 console.error(">>> get income error: ", error);
    //             });
    //         });
    // };

    // const deleteIncome = async (id) => {
    //     await axios
    //         .post(`${BASE_URL}/income/delete`, id, {
    //             headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
    //         })
    //         .then((res) => {
    //             console.info(">>> delete income res: ", res);
    //             getIncome();
    //         })
    //         .catch((error) => {
    //             console.error((error) => {
    //                 console.error(">>> delete income error: ", error);
    //             });
    //         });
    // };

    // const updateIncome = async (id, income) => {
    //     await axios
    //         .post(`${BASE_URL}/income/update/${id}`, income, {
    //             headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
    //         })
    //         .then((res) => {
    //             console.info(">>> update income res: ", res);

    //             // Fetch the updated list of expenses
    //             getIncome();
    //         })
    //         .catch((err) => {
    //             console.error(">>> update income error: ", err);
    //             setError(error.response.data.message);
    //         });
    // };

    // const getMonthlyIncome = (sortedIncomes) => {
    //     const date = new Date();
    //     const currMonth = date.getMonth() + 1;
    //     const currYear = date.getFullYear();

    //     let p2MonthInc = { month: `${currYear}-${currMonth - 2}`, amount: 0 };
    //     let prevMonthInc = { month: `${currYear}-${currMonth - 1}`, amount: 0 };
    //     let currMonthInc = { month: `${currYear}-${currMonth}`, amount: 0 };

    //     sortedIncomes.map((inc) => {
    //         switch (Number(inc.date.substring(5, 7))) {
    //             case Number(currMonth) - 2:
    //                 p2MonthInc.amount += inc.amount;
    //                 break;

    //             case Number(currMonth) - 1:
    //                 prevMonthInc.amount += inc.amount;
    //                 break;

    //             case Number(currMonth):
    //                 currMonthInc.amount += inc.amount;
    //                 break;

    //             default:
    //                 break;
    //         }
    //         return "";
    //     });

    //     setCurrentMonthIncome(currMonthInc.amount);
    //     setP3MonthIncome([p2MonthInc, prevMonthInc, currMonthInc]);
    // };



    return (
        <GlobalContext.Provider
            value={{
                // setTrips,
                addPortfolio,
                getPortfolio,
                deletePortfolio,
                updatePortfolio,
                portfolio,

                addProject,
                getProject,
                deleteProject,
                updateProject,
                project,
                // addIncome,
                // getIncome,
                // deleteIncome,
                // updateIncome,
                error,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
