import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios"
import { useGlobalContext } from "../components/context/globalContext";


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


function ProjectUploadForm() {
    const [projectName, setProjectName] = useState("")
    const [date, setDate] = useState("")
    const [teamSize, setTeamSize] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [skills, setSkills] = useState("")

    // projectName: { type: String, required: true },
    // date: { type: Date, required: true },
    // teamSize: { type: Number, required: true },
    // projectDescription: { type: String, required: true },
    // skills: { type: String, required: true },


    const handleNameChange = (e) => {
        setProjectName(e.target.value)
    };

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setProjectDescription(e.target.value)
    }

    const handleSkillsChange = (e) => {
        setSkills(e.target.value)
    };

    const handleSizeChange = (e) => {
        setTeamSize(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('projectName', projectName);
        formData.append('date', date);
        formData.append('projectDescription', projectDescription)
        formData.append('skills', skills)
        formData.append('teamSize', teamSize)
        try {
            await addProject(formData)
            formData = null
            console.log("submitting project record")
        } catch (err) {
            console.info(">>> error adding project: ", err)
            window.alert("An error occurred, please try again")
        }
    }

    return (
        <ProjectUploadStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    id="projectName"
                    name="project name"
                    type="string"
                    required
                    value={formData.projectName}
                    onChange={(e) => {
                        handleNameChange(e, "projectName");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="dd/mm/yyyy"
                    value={formData.date}
                    required
                    onChange={(e) => {
                        handleDateChange(e, "dateCompleted");
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
                        handleDescriptionChange(e, "projectDescription");
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
                        handleSkillsChange(e, "skills");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    type="number"
                    id="teamSize"
                    name="teamSize"
                    placeholder="Ideal team size"
                    value={formData.teamSize}
                    required
                    onChange={(e) => {
                        handleSizeChange(e, "url");
                    }}
                />
            </div>
            <div className="submit-btn">
                <button type="submit">Add <Project></Project> Record</button>
            </div>
        </ProjectUploadStyled >
    );
}

const ProjectUploadStyled = styled.form`
  display: flex;
  flex-direction: column;
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
      width: 100%;
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

export default ProjectUploadForm;