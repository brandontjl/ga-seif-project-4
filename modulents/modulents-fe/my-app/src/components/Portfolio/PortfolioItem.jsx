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
import PortfolioEditForm from "./PortfolioEditForm";

function PortfolioItem({
    id,
    projectName,
    dateCompleted,
    company,
    projectDescription,
    skills,
    url,
    deletePortfolio,
    updatePortfolio,
}) {
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);


    const handleDelete = async (id) => {
        try {
            await deletePortfolio({ id: id });
        } catch (error) {
            console.info(">>> error deleting portfolio: ", error);
            window.alert("An error, please try again.");
        }
    };

    const handleEdit = (projectName, dateCompleted, company, projectDescription, skills, url) => {
        setSelectedPortfolio({
            projectName: projectName,
            dateCompleted: dateCompleted.substring(0, 10),
            company: company,
            projectDescription: projectDescription,
            skills: skills,
            url: url
        });
    };

    return (
        <PortfolioItemStyled>
            <div className="content">
                <h5>{projectName}</h5>
            </div>
            <div className="inner-content">
                <p>
                    {dateCompleted}{dateCompleted.substring(0, 10)}
                </p>
                <p>
                    {company}
                </p>
                <p>
                    {projectDescription}
                </p>
                <p>
                    {skills}
                </p>
                <p>
                    {url}
                </p>
            </div>
            <div className="btn-container">
                <button
                    className="edit-btn"
                    onClick={() => {
                        handleEdit(projectName, dateCompleted, company, projectDescription, skills, url);
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
                {selectedPortfolio ? (
                    <PortfolioEditForm
                        id={id}
                        selectedPortfolio={selectedPortfolio}
                        updatePortfolio={updatePortfolio}
                        setSelectedPortfolio={setSelectedPortfolio}
                    />
                ) : (
                    ""
                )}
            </div>
        </PortfolioItemStyled>
    );
}

const PortfolioItemStyled = styled.div`
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

export default PortfolioItem;