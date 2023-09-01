import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios"
import { useGlobalContext } from "../../context/globalContext";

function PortfolioUploadForm() {
    const { addPortfolio } = useGlobalContext();
    const [formData, setFormData] = useState({
        projectName: "",
        dateCompleted: "",
        company: "",
        projectDescription: "",
        skills: "",
        url: ""
    });

    const handleFormChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };
    // const [projectName, setProjectName] = useState("")
    // const [dateCompleted, setDateCompleted] = useState("")
    // const [company, setCompany] = useState("")
    // const [projectDescription, setProjectDescription] = useState("")
    // const [skills, setSkills] = useState("")
    // const [url, setUrl] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPortfolio(formData);
            setFormData({
                projectName: "",
                dateCompleted: "",
                company: "",
                projectDescription: "",
                skills: "",
                url: ""
            });
            console.log("submitting portfolio");
        } catch (error) {
            console.info(">>> error adding portfolio: ", error);
            window.alert("An error, please try again.");
        }
    };

    // const handleNameChange = (e) => {
    //     setProjectName(e.target.value)
    // };

    // const handleDateChange = (e) => {
    //     setDateCompleted(e.target.value)
    // }

    // const handleCompanyChange = (e) => {
    //     setCompany(e.target.value)
    // };

    // const handleDescriptionChange = (e) => {
    //     setProjectDescription(e.target.value)
    // }

    // const handleSkillsChange = (e) => {
    //     setSkills(e.target.value)
    // };

    // const handleUrlChange = (e) => {
    //     setUrl(e.target.value)
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append('projectName', projectName);
    //     formData.append('dateCompleted', dateCompleted);
    //     formData.append('company', company)
    //     formData.append('projectDescription', projectDescription)
    //     formData.append('url', url)
    //     formData.append('skills', skills)
    //     try {
    //         await addPortfolio(formData)
    //         formData = null
    //         console.log("submitting portfolio project record")
    //     } catch (err) {
    //         console.info(">>> error adding portfolio: ", err)
    //         window.alert("An error occurred, please try again")
    //     }
    // }

    return (
        <PortfolioUploadStyled onSubmit={handleSubmit} >
            <div className="input-control">
                <input
                    id="projectName"
                    name="project name"
                    type="string"
                    required
                    value={formData.projectName}
                    onChange={(e) => {
                        handleFormChange(e, "projectName");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="dd/mm/yyyy"
                    value={formData.dateCompleted}
                    required
                    onChange={(e) => {
                        handleFormChange(e, "dateCompleted");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    name="company"
                    id="company"
                    required
                    value={formData.company}
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
            {/* <div className="input-control">
                <input
                    type="string"
                    id="projectDescription"
                    name="Project Description"
                    placeholder="Give a brief account of the project tasks and requirements"
                    value={formData.projectDescription}
                    required
                    onChange={(e) => {
                        handleDescriptionChange(e, "projectDescription");
                    }}
                />
            </div> */}
            <div className="submit-btn">
                <button onClick={handleSubmit}>Add Portfolio Record</button>
            </div>
        </PortfolioUploadStyled >
    );
}

const PortfolioUploadStyled = styled.form`
  display: absolute;
  flex-direction: row;
  gap: 2rem;

  input,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: var(--primary-color);
    &::placeholder {
      color: var(--primary-color3);
    }
  }

  .input-control {
    input {
      width: 40%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: var(--primary-color);
      &:focus,
      $:active {
        color: var(--primary-color);
      }
    }
  }
`;

export default PortfolioUploadForm;