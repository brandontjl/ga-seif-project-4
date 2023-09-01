import React, { useState } from "react";
import { styled } from "styled-components";

function PortfolioEditForm({
    id,
    selectedPortfolio,
    updatePortfolio,
    setSelectedPortfolio,
}) {
    const [formData, setFormData] = useState({
        projectName: selectedPortfolio.projectName,
        dateCompleted: selectedPortfolio.dateCompleted,
        company: selectedPortfolio.company,
        projectDescription: selectedPortfolio.projectDescription,
        skills: selectedPortfolio.skills,
        url: selectedPortfolio.url
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
            await updatePortfolio(id, formData);
            setSelectedPortfolio(null);
        } catch (error) {
            console.info(">>> error updating portfolio: ", error);
            window.alert("An error, please try again.");
        }
    };

    const handleCancel = () => {
        setSelectedPortfolio(null);
    };

    const limitTwoDP = (e) => {
        const t = e.target.value;

        if (t.indexOf(".") >= 0 && t.substr(t.indexOf(".") + 1).length > 2)
            e.target.value =
                t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3);
    };


    return (
        <PortfolioEditFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    id="projectName"
                    name="project Name"
                    type="string"
                    required
                    value={formData.projectName}
                    onChange={(e) => {
                        handleFormChange(e, "date");
                    }}
                />
            </div>
            <div className="input-control">
                <input
                    type="date"
                    id="dateCompleted"
                    name="date"
                    placeholder="dd/mm/yy"
                    required
                    value={formData.dateCompleted}
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
                    name="projectDescription"
                    placeholder="Give a brief overview of the project completed"
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
            <div className="input-control">
                <input
                    type="string"
                    id="url"
                    name="url"
                    placeholder="LinkedIn Profile, Github, etc."
                    required
                    value={formData.url}
                    onChange={(e) => {
                        handleFormChange(e, "url");
                    }}
                />
            </div>
            <div className="btn-con">
                <button type="submit">Update</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </PortfolioEditFormStyled>
    );
}

const PortfolioEditFormStyled = styled.form`
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

export default PortfolioEditForm;