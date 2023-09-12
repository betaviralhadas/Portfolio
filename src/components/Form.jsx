import React, {useRef, useState} from "react";
import '../style/Components/_Form.scss';
import emailJs from "@emailjs/browser";


const Form = ({onSuccess}) => {
    const form_send = useRef()
    const [currentMessage, setCurrentMessage] = useState(false)
    
    const configurationEmail = async (e) => {
        e.preventDefault();
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

    return(
        <div id="contact">
            <h2 className="form_title">Got a question or proposal?</h2>
            <h3>Send me un email...</h3>
            <form className="form" ref={form_send} onSubmit={configurationEmail}>
                <div className="form_fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form_fields">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>
                <div className="form_message_field">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" />
                </div>
                <button className="button" type="submit">Send</button>
            </form>
        </div>
    )
}
export default Form;