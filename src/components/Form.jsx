import React, { useRef, useState } from "react";
import '../style/Components/_Form.scss';
import emailJs from "@emailjs/browser";


const Form = ({ onSuccess }) => {
    const form_send = useRef()
    const [currentMessage, setCurrentMessage] = useState(false)

    const emailValidation = (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(email);
    }

    const nameValidation = (name) => {
        const nameRegex = /^[a-zA-Z-\s]+$/
        return nameRegex.test(name);
    }

    const configurationEmail = async (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;

        if (name === '' || nameValidation(name) === false) {
            document.querySelector('.error_name').innerHTML = "Invalid name"
        }
        else if (email === '' || emailValidation(email) === false) {
            document.querySelector('.error_email').innerHTML = "Enter a valid email"
        }
        else {
            setCurrentMessage(true);
            await emailJs.sendForm("service_worocef", "template_9bspzc6", form_send.current, "uC0mcFhJ6_FUtSOMY")
                .then((rest) => {
                    setCurrentMessage(true);
                    onSuccess();
                })
                .catch((error) => {
                    console.log(error.text)
                })
        }
    }

    return (
        <div id="contact">
            <h2 className="form_title">Got a question or proposal?</h2>
            <h3 className="form_subtitle">Send me un email...</h3>
            <form className="form" ref={form_send} onSubmit={configurationEmail}>
                <div className="form_fields">
                    <label htmlFor="name">Name</label>
                    <input className="form_control" id="name" type="text" name="name" placeholder="Enter your name" required />
                    <span className="error_name"></span>
                </div>
                <div className="form_fields">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Enter your email" />
                    <span className="error_email"></span>
                </div>
                <div className="form_message_field">
                    <label htmlFor="message">Message</label>
                    <textarea className="message" id="message" type="text" name="message" placeholder="Enter a message" />
                </div>
                <div className="buttons">
                    <button className="button" type="submit">Send</button>
                    <button className="button" type="reset">Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default Form;