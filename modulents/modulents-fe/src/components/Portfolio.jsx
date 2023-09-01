import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth/AuthProvider";
import axios from "axios";
import Cookies from "js-cookie";

export default function PortfolioEditForm() {
    const { logoutSuccess } = useContext(AuthContext);

    // create state to store form data
    const [formData, setFormData] = useState({});

    const [projectName, setProjectName] = useState("")
    const [dateCompleted, setDateCompleted] = useState("")
    const [company, setCompany] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [skills, setSkills] = useState("")
    const [url, setUrl] = useState("")

    // Introduce a new state variable for the selected portfolio
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/portfolio/display", {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> get portfolio res: ", res);
            })
            .catch((error) => {
                console.error(">>> get portfolio error: ", error);
            });
    }, []);

    const handleNameChange = (e) => {
        setProjectName(e.target.value)
    };

    const handleDateChange = (e) => {
        setDateCompleted(e.target.value)
    }

    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    };

    const handleDescriptionChange = (e) => {
        setProjectDescription(e.target.value)
    }

    const handleSkillsChange = (e) => {
        setSkills(e.target.value)
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }


    const handleFormChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };


    // Handler for selecting an expense for editing
    const handleEdit = (portfolio) => {
        setSelectedPortfolio(portfolio);
        setFormData({
            projectName: selectedPortfolio.projectName,
            dateCompleted: selectedPortfolio.dateCompleted,
            company: selectedPortfolio.company,
            projectDescription: selectedPortfolio.projectDescription,
            skills: selectedPortfolio.skills,
            url: selectedPortfolio.url
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/portfolio/create", formData, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> create expense res: ", res);

                // Fetch the updated list of portfolios
                axios
                    .get("http://localhost:3000/api/portfolio/display", {
                        headers: {
                            Authorization: `Bearer ${Cookies.get("userAuthToken")}`,
                        },
                    })
                    .then((res) => {
                        console.info(">>> get portfolio res: ", res);
                        setSelectedPortfolio(res.data);
                    })
                    .catch((error) => {
                        console.error(">>> get portfolio error: ", error);
                    });
            })
            .catch((error) => {
                console.error(">>> create portfolio error: ", error);
            });
    };

    const handleDelete = (portfolioId) => {
        axios
            .post(`http://localhost:3000/api/portfolio/delete/${portfolioId}`, formData, {
                headers: { Authorization: `Bearer ${Cookies.get("userAuthToken")}` },
            })
            .then((res) => {
                console.info(">>> delete portfolio res: ", res);

                // Remove the deleted portfolio from the portfolio state
                setSelectedPortfolio((prevPortfolio) =>
                    prevPortfolio.filter((exp) => exp._id !== portfolioId)
                );
            })
            .catch((error) => {
                console.error(">>> delete portfolio error: ", error);
            });
    };

    // Handler for selecting an expense for editing
    const updatePortfolio = () => {
        axios
            .post(
                `http://localhost:3000/api/portfolio/update/${selectedPortfolio._id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("userAuthToken")}`,
                    },
                }
            )
            .then((res) => {
                console.info(">>> update portfolio res: ", res);
                setSelectedPortfolio(null);
                setFormData({});

                // Fetch the updated list of portfolio
                axios
                    .get("http://localhost:3000/api/portfolio/display", {
                        headers: {
                            Authorization: `Bearer ${Cookies.get("userAuthToken")}`,
                        },
                    })
                    .then((res) => {
                        console.info(">>> get portfolio res: ", res);
                        setSelectedPortfolio(res.data);
                    })
                    .catch((error) => {
                        console.error(">>> get portfolio error: ", error);
                    });
            })
            .catch((error) => {
                console.error(">>> update portfolio error: ", error);
            });
    };

    const limitTwoDP = (e) => {
        const t = e.target.value;

        if (t.indexOf(".") >= 0 && t.substr(t.indexOf(".") + 1).length > 2)
            e.target.value =
                t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3);
    };

    return (
        <div>
            <h2>Portfolio - Completed Projects</h2>
            <button onClick={logoutSuccess}>Logout</button>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="projectName">Project Name:</label>
                    <input
                        type="string"
                        id="projectName"
                        name="project name"
                        required
                        onChange={(e) => {
                            handleFormChange(e, "projectName");
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        onChange={(e) => {
                            handleFormChange(e, "date");
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="company">Company:</label>
                    <input
                        name="company"
                        id="company"
                        onChange={(e) => {
                            handleFormChange(e, "company");
                        }}
                    />
                </div>
                <div className="input-control">
                    <input
                        type="string"
                        id="projectDescription"
                        name="Project Description"
                        placeholder="Give a brief account of the project tasks and requirements"
                        value={formData.projectDescription}
                        required
                        onChange={(e) => {
                            handleFormChange(e, "projectDescription");
                        }}
                    />
                </div>
                <div className="input-control">
                    <input
                        type="string"
                        id="skills"
                        name="skills"
                        placeholder="What were the skills involved? i.e., tech stack used, digital marketing solutions, etc."
                        value={formData.skills}
                        required
                        onChange={(e) => {
                            handleFormChange(e, "skills");
                        }}
                    />
                </div>
                <div className="input-control">
                    <input
                        type="string"
                        id="url"
                        name="url"
                        placeholder="Linkedin Profile / Project Url"
                        value={formData.url}
                        required
                        onChange={(e) => {
                            handleFormChange(e, "url");
                        }}
                    />
                </div>
                <div>
                    <h2>Portfolio:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Date Completed</th>
                                <th>Company</th>
                                <th>Project Description</th>
                                <th>Skills</th>
                                <th>Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedPortfolio.map((portfolio) => (
                                <tr key={portfolio._id}>
                                    <td>{portfolio.projectName}</td>
                                    <td>{portfolio.dateCompleted}</td>
                                    <td>{portfolio.company}</td>
                                    <td>{portfolio.projectDescription}</td>
                                    <td>{portfolio.skills}</td>
                                    <td>{portfolio.url}</td>
                                    <td>
                                        <button onClick={() => handleEdit(portfolio)}>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(portfolio._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>

            {selectedPortfolio && (
                <div>
                    <h2>Edit Portfolio</h2>
                    <form onSubmit={updatePortfolio}>
                        <div>
                            <label htmlFor="edit-projectName">Project Name:</label>
                            <input
                                type="string"
                                id="projectName"
                                name="project name"
                                value={formData.projectName || selectedPortfolio.projectName}
                                required
                                onChange={(e) => {
                                    handleFormChange(e, "projectName");
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="edit-date">Date:</label>
                            <input
                                type="date"
                                id="edit-date"
                                name="date"
                                value={formData.date || selectedPortfolio.date}
                                onChange={(e) => handleFormChange(e, "name")}
                            />
                        </div>
                        <div>
                            <label htmlFor="edit-company">Company:</label>
                            <input
                                id="edit-category"
                                name="category"
                                value={formData.category || selectedPortfolio.category}
                                onChange={(e) => handleFormChange(e, "projectDescription")}
                            />
                        </div>
                        <div>
                            <label htmlFor="edit-projectDescription">Project Description:</label>
                            <input
                                type="string"
                                id="edit-projectDescription"
                                name="projectDescription"
                                value={formData.projectDescription || selectedPortfolio.projectDescription}
                                required
                                onChange={(e) => {
                                    handleFormChange(e, "projectDescription");
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="edit-skills">Skills:</label>
                            <input
                                type="string"
                                id="edit-skills"
                                name="skills"
                                value={formData.skills || selectedPortfolio.skills}
                                required
                                onChange={(e) => {
                                    handleFormChange(e, "skills");
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="edit-url">Url:</label>
                            <input
                                type="string"
                                id="edit-url"
                                name="url"
                                value={formData.url || selectedPortfolio.url}
                                required
                                onChange={(e) => {
                                    handleFormChange(e, "url");
                                }}
                            />
                        </div>
                        <div>
                            <button type="submit">Save</button>
                            <button onClick={() => setSelectedPortfolio(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}