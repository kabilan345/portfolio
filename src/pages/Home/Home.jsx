import React from "react";
import profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Kabilan.</span> <br/> web developer & ui/ux designer
                    </h1>

                    <p className="home__description">
                        I'm a student based on web development and ui/ux designer focused on crafting clean & user-frirndly experience. 
                        I am passionate about building excellent software that improves the lives of those around me.
                    </p>

                    <Link to='/about' className="button">
                    more about me <span className="button__icon">
                        <FaArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}


export default Home