import React from "react";
import { useForm } from "react-hook-form";
//import { Redirect } from "react-router-dom";

// Import image
import fine from "../../Stylesheets/Quiz/Images/fine.svg";
import medium from "../../Stylesheets/Quiz/Images/medium.svg";
import course from "../../Stylesheets/Quiz/Images/course.svg";

//StyleSheet
import "../../Stylesheets/Quiz/quizStyles.css";

const Hairstructure = ({ history }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data, e) => {
		e.preventDefault();
		console.log(data);
	};
	const BacktoHairType = () => {
		history.push("/HairQuiz");
	};
	return (
		<>
			<div className="container">
				<div className="row">
					<form
						className="QuizForm col-sm-12 col-md-8 col-lg-8"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="col-sm-12 col-md-12 col-lg-12">
							<div className="QuizForm__label">
								<label>
									<input
										type="radio"
										name="hairstructure"
										value="fine"
										ref={register}
									/>
									<div className="QuizForm-bgBlock">
										<img src={fine} className="img-fluid" alt="fine" />
									</div>

									<p>Fine</p>
								</label>
								<label>
									<input
										type="radio"
										name="hairstructure"
										value="medium"
										ref={register}
										className="img-fluid"
									/>
									<div className="QuizForm-bgBlock">
										<img src={medium} alt="medium" className="img-fluid" />
									</div>

									<p>Medium</p>
								</label>
								<label>
									<input
										type="radio"
										name="hairstructure"
										value="coarse"
										ref={register}
										className="img-fluid"
									/>
									<div className="QuizForm-bgBlock">
										<img src={course} className="img-fluid" alt="coarse" />
									</div>

									<p>coarse</p>
								</label>
							</div>
						</div>
						<div class="QuizForm__btnBlock col-sm-12 col-md-12 col-lg-12">
							<button className="QuizForm__btn" onClick={BacktoHairType}>
								← Back
							</button>
							<button className="QuizForm__btn" type="submit">
								Next →
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Hairstructure;
