import React, { useState } from "react";
import { styled } from "styled-components";
// import {
//   accommodation,
//   calendar,
//   categories,
//   dollar,
//   edit,
//   entertainment,
//   fitness,
//   fnb,
//   groceries,
//   others,
//   shopping,
//   transport,
//   trash,
// } from "../../utils/icons";
import ProjectEditForm from "./ProjectEditForm";

function ProjectItem({
    id,
    projectName,
    date,
    teamSize,
    projectDescription,
    skills,
    deleteProject,
    updateProject,
}) {
    const [selectedProject, setSelectedProject] = useState(null);


    const handleDelete = async (id) => {
        try {
            await deleteProject({ id: id });
        } catch (error) {
            console.info(">>> error deleting project: ", error);
            window.alert("An error, please try again.");
        }
    };

    const handleEdit = (projectName, date, teamSize, projectDescription, skills,) => {
        setSelectedProject({
            projectName: projectName,
            date: date.substring(0, 10),
            teamSize: teamSize,
            projectDescription: projectDescription,
            skills: skills
        });
    };

    return (
        <ProjectItemStyled>
            <div className="content">
                <h5>{projectName}</h5>
            </div>
            <div className="inner-content">
                <p>
                    {date}{date.substring(0, 10)}
                </p>
                <p>
                    {teamSize}
                </p>
                <p>
                    {projectDescription}
                </p>
                <p>
                    {skills}
                </p>
            </div>
            <div className="btn-container">
                <button
                    className="edit-btn"
                    onClick={() => {
                        handleEdit(projectName, date, teamSize, projectDescription, skills);
                    }}
                >
                </button>

                <button
                    className="trash-btn"
                    onClick={() => {
                        handleDelete(id);
                    }}
                >
                </button>
            </div>

            <div className="edit-form-container">
                {selectedProject ? (
                    <ProjectEditForm
                        id={id}
                        selectedProject={selectedProject}
                        updateProject={updateProject}
                        setSelectedProject={setSelectedProject}
                    />
                ) : (
                    ""
                )}
            </div>
        </ProjectItemStyled>
    );
}

const ProjectItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: (--color-blue);
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }

  .edit-btn,
  .trash-btn {
    padding: 0.4rem 0.6rem;
    margin: 0.4rem;
  }
`;

export default ProjectItem;