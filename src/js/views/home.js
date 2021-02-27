import React from "react";
import { Persons } from "./persons";
import { Planets } from "./planets";
import "../../styles/home.scss";
import vader from "../../img/R2D2.png";
import Saturn from "../../img/Saturn.png";

export const Home = () => (
	<div className="container">
		<div className="character">
			<img src={vader} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Characters</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Persons />
			</div>
		</div>
		<div className="planeta">
			<img src={Saturn} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Planets</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Planets />
			</div>
		</div>
	</div>
);
