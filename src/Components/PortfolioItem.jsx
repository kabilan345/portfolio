import React, { useState } from "react";
import Close from "../assets/close.svg";


const PortfolioItem = ({ img, title, details }) => {
const [Modal, setModal] = useState(false);

const toggleModal = () => setModal(!Modal);

return (
    <div className="portfolio__item">
    <img src={img} alt="" className="portfolio__img" />

    <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
    </div>

    {Modal && (
        <div className="portfolio__modal">
        <div className="portfolio__modal-contant">
            <img
                src={Close}
                alt=""
                className="modal__close"
                onClick={toggleModal}
            />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
            {details.map(({ icon, title, desc, github, preview }, index) => (
                <li className="modal__item" key={index}>
                <span className="item__icon">{icon}</span>
                <div>
                    <span className="item__title">{title}</span>
                    {github || preview ? (
                    <a
                        href={desc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github__btn"
                    >
                        Click Here
                    </a>
                    ) : (
                    <span className="item__details">{desc}</span>
                    )}
                </div>
                </li>
            ))}
            </ul>

            <img src={img} alt="" className="modal__img" />
        </div>
        </div>
    )}
    </div>
);
};

export default PortfolioItem;
