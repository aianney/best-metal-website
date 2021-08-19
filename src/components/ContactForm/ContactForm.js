import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
	return (
		<div className="contact-form">
			<div className="contactform-overlay"></div>
            {/* <div className='title'><h1>Contact Best Metal</h1></div> */}
			<form className="form-container">
				<input
					className="firstname"
					type="text"
					id="fname"
					name="firstname"
					placeholder="Your name.."
				/>
				<input
					className="lastname"
					type="text"
					id="lname"
					name="lastname"
					placeholder="Your last name.."
				/>
				<input
					className="firstname"
					type="text"
					id="fname"
					name="firstname"
					placeholder="Your name.."
				/>
				<input
					className="lastname"
					type="text"
					id="lname"
					name="lastname"
					placeholder="Your last name.."
				/>
				<textarea
					id="subject"
					name="subject"
					placeholder="Write something.."
				></textarea>

				<input className="input-button" type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default ContactForm;
