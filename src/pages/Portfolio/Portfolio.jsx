import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../Components/PortfolioItem";
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <section className="portfolio section">
            <h2 className="section__title">
                My <span>Projects</span>
            </h2>

            <div className="portfolio__container container grid">
                {portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item}/>;
                })}
            </div>
        </section>
    )
}


export default Portfolio;