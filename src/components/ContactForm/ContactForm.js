import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Function that displays a success toast on bottom right of the page when form submission is successful
	const toastifySuccess = () => {
		toast("Form sent!", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: "submit-feedback success",
			toastId: "notifyToast",
		});
	};

	// Function called on submit that uses emailjs to send email of valid contact form
	const onSubmit = async (data) => {
		// Destrcture data object
		const { name, email, lastname, phonenumber, message } = data;
		try {
			const templateParams = {
				name,
				email,
				lastname,
				phonenumber,
				message,
			};

			await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			);

			reset();
			toastifySuccess();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="contact-form">
			<div className="contactform-overlay"></div>

			<div className="contact-form">
				<div className="contactform-overlay"></div>
				<div className="ContactForm">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<div className="contactForm">
									<form
										id="contact-form"
										onSubmit={handleSubmit(onSubmit)}
										noValidate
									>
										{/* Row 1 of form */}
										<div className="row formRow">
											<div className="col-6">
												<input
													type="text"
													name="name"
													{...register("name", {
														required: {
															value: true,
															message: "Please enter your name",
														},
														maxLength: {
															value: 30,
															message: "Please use 30 characters or less",
														},
													})}
													className="form-control formInput"
													placeholder="Full Name"
												></input>
												{errors.name && (
													<span className="errorMessage">
														{errors.name.message}
													</span>
												)}
												<input
													type="text"
													name="lastname"
													{...register("lastname", {
														required: {
															value: true,
															message: "Please enter your lastname",
														},
														maxLength: {
															value: 30,
															message: "Please use 30 characters or less",
														},
													})}
													className="form-control formInput"
													placeholder="Last Name"
												></input>
												{errors.lastname && (
													<span className="errorMessage">
														{errors.lastname.message}
													</span>
												)}
											</div>
											<div className="col-6">
												<input
													type="email"
													name="email"
													{...register("email", {
														required: true,
														pattern:
															/^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
													})}
													className="form-control formInput"
													placeholder="Email Address"
												></input>
												{errors.email && (
													<span className="errorMessage">
														Please enter a valid email address
													</span>
												)}
												<input
													type="phonenumber"
													name="phonenumber"
													{...register("phonenumber", {
														required: true,
														pattern:
															/^[7-9]{1}[0-9]{9}/,
													})}
													className="form-control formInput"
													placeholder="Phone Number"
												></input>
												{errors.phonenumber && (
													<span className="errorMessage">
														Please enter a valid phone number
													</span>
												)}
											</div>
										</div>
										{/* Row 2 of form */}
										{/* <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div> */}
										{/* Row 3 of form */}
										<div className="row formRow">
											<div className="col">
												<textarea
													rows={3}
													name="message"
													{...register("message", {
														required: true,
													})}
													className="form-control formInput"
													placeholder="Message"
												></textarea>
												{errors.message && (
													<span className="errorMessage">
														Please enter a message
													</span>
												)}
											</div>
										</div>
										<button className="submit-btn" type="submit">
											Submit
										</button>
									</form>
								</div>
								<ToastContainer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
