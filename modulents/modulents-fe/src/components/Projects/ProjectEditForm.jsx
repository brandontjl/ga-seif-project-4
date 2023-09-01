import React, { useState } from "react";
import { styled } from "styled-components";

function ProjectEditForm({
    id,
    selectedProject,
    updateProject,
    setSelectedProject,
}) {
    const [formData, setFormData] = useState({
        projectName: selectedProject.projectName,
        date: selectedProject.date,
        teamSize: selectedProject.teamSize,
        projectDescription: selectedProject.projectDescription,
        skills: selectedProject.skills,
    });

    const handleFormChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProject(id, formData);
            setSelectedProject(null);
        } catch (error) {
            console.info(">>> error updating project: ", error);
            window.alert("An error, please try again.");
        }
    };

    const handleCancel = () => {
        setSelectedProject(null);
    };

    const limitTwoDP = (e) => {
        const t = e.target.value;

        if (t.indexOf(".") >= 0 && t.substr(t.indexOf(".") + 1).length > 2)
            e.target.value =
                t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3);
    };


    return (
        <ProjectEditFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    id="projectName"
                    name="project Name"
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
                    placeholder="dd/mm/yy"
                    required
                    value={formData.date}
                    onChange={(e) => {
                        handleFormChange(e, "date");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    name="teamSize"
                    id="teamSize"
                    required
                    value={formData.teamSize}
                    onChange={(e) => {
                        handleFormChange(e, "teamSize");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    type="string"
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Give a brief overview of the project"
                    required
                    value={formData.projectDescription}
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
                    value={formData.skills}
                    onChange={(e) => {
                        handleFormChange(e, "skills");
                    }}
                />
            </div>
            <div className="btn-con">
                <button type="submit">Update</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </ProjectEditFormStyled>
    );
}

const ProjectEditFormStyled = styled.form`
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

  .btn-con {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default ProjectEditForm;