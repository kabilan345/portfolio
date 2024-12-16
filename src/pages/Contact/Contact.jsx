import React, { useState } from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebase"; // Import the Firebase configuration

import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Add form data to Firestore
            await addDoc(collection(db, "contacts"), formData);
            setSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
        setLoading(false);
    };

    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Contact Me</h3>
                    <p className="contact__description">
                        If you have any questions or just want to say hi, feel free to reach out to me...
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />
                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">kabi***.b2**3@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />
                            <div>
                                <span className="info__title">Call Me</span>
                                <h4 className="info__desc">+91-87788*****</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="" className="contact__social-link">
                            <FaLinkedinIn />
                        </a>
                        <a href="" className="contact__social-link">
                            <FaGithub />
                        </a>
                        <a href="" className="contact__social-link">
                            <FaInstagram />
                        </a>
                        <a href="" className="contact__social-link">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="form__control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form__input-div">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="form__control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form__input-div">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Your Subject"
                                className="form__control"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="form__control textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button className="button" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                    {success && <p className="success-message">Message sent successfully!</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
