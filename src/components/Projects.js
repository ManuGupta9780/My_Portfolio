import React from "react";
import Carousel from "react-bootstrap/Carousel";
import captcha from "../captcha.jpg";
import genre from "../genres.jpg";
import { Button } from "react-bootstrap";

const Projects = () => {
	return (
		<div className="Project-wrapper">
			<div className="Project-heading">
				<h1>Projects</h1>
			</div>
			<div className="Project-content">
				<Carousel>
					<Carousel.Item interval={1000}>
						<img className="project1" src={captcha} alt="First slide" />
						<Carousel.Caption>
							<h3
								className="slideCaption"
								href="https://github.com/anshita2000/mosaic-2k20"
								title="View Project">
								Handwritten Captcha Solver
							</h3>
							<p className="slideMatter">
								Captcha Solver(using Deep Learning) to find letters and digits
								in the captcha image.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img className="project1" src={genre} alt="Second slide" />
						<Carousel.Caption>
							<h3
								className="slideCaption"
								href="https://github.com/ManuGupta9780/MUSIC-GENRE-CLASSIFIER"
								title="View Project">
								Music Genre Classifier
							</h3>
							<p className="slideMatter">
								Automated system for classifying music files on the basis of
								their genres.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Projects;
