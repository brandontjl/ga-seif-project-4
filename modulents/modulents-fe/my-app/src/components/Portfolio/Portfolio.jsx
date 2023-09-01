import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import PortfolioUploadForm from "./PortfolioForms";
import PortfolioItem from "./PortfolioItem";
import { useGlobalContext } from "../../context/globalContext";
import PortfolioEditForm from "../Portfolio";

function Portfolio() {
    const {
        portfolio,
        getPortfolio,
        updatePortfolio,
        deletePortfolio,
    } = useGlobalContext();

    useEffect(() => {
        getPortfolio();
    }, []);

    return (
        <PortfolioStyled>
            <InnerLayout>
                <div className="portfolio-content">
                    <div className="form-container">
                        <PortfolioUploadForm />
                    </div>

                    <div className="portfolio">
                        {portfolio
                            ? portfolio.map((portfolio, idx) => {
                                const { _id, projectName, dateCompleted, company, projectDescription, skills, url } = portfolio;
                                return (
                                    <PortfolioItem
                                        key={_id}
                                        id={_id}
                                        projectName={projectName}
                                        dateCompleted={dateCompleted}
                                        company={company}
                                        projectDescription={projectDescription}
                                        skills={skills}
                                        url={url}
                                    />
                                );
                            })
                            : ""}
                    </div>
                </div>
            </InnerLayout>
        </PortfolioStyled>
    );
}

const PortfolioStyled = styled.div`
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

export default Portfolio;