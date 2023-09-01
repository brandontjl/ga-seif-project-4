import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import ProjectUploadForm from "./ProjectForms";
import ProjectItem from "./ProjectItem";
import { useGlobalContext } from "../../context/globalContext";
import ProjectEditForm from "./Projects";

function Project() {
    const {
        project,
        getProject,
        updateProject,
        deleteProject,
    } = useGlobalContext();

    useEffect(() => {
        getProject();
    }, []);

    return (
        <ProjectStyled>
            <InnerLayout>
                <div className="project-content">
                    <div className="form-container">
                        <ProjectUploadForm />
                    </div>

                    <div className="project">
                        {project
                            ? project.map((project, idx) => {
                                const { _id, projectName, date, teamSize, projectDescription, skills } = project;
                                return (
                                    <ProjectItem
                                        key={_id}
                                        id={_id}
                                        projectName={projectName}
                                        date={date}
                                        teamSize={teamSize}
                                        projectDescription={projectDescription}
                                        skills={skills}
                                    />
                                );
                            })
                            : ""}
                    </div>
                </div>
            </InnerLayout>
        </ProjectStyled>
    );
}

const ProjectStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    color: var(--primary-color);

    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-accent);
    }
  }

  .expense-content {
    display: flex;
    gap: 2rem;
    .expenses {
      flex: 1;
    }
  }
`;

export default Project;