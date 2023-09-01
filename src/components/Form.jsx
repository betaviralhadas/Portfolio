import React from "react";


const Form = () => {
    return(
        <div id="contact">
            <h3>Got a question or proposal?</h3>
            <h4>Send me un email...</h4>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <input type="text" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default Form;