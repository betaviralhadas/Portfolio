import React from "react";
import '../style/Components/_Form.scss';


const Form = () => {
    return(
        <div id="contact">
            <h2>Got a question or proposal?</h2>
            <h3>Send me un email...</h3>
            <form className="form">
                <div className="content_form">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="content_form">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                </div>
                <div className="content_form">
                    <label htmlFor="message">Message</label>
                    <input type="text" />
                </div>
                <button className="button" type="submit">Send</button>
            </form>
        </div>
    )
}
export default Form;