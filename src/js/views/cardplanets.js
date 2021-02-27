import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cardplanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-transparent">
			<div className="row">
				<div className="col-6">
					<img src="https://www.speakgif.com/wp-content/uploads/2015/11/star-wars-death-star-animated-gif.gif" />
				</div>
				<div className="col-6 text-center">
					<h1 className="display-4 text-white">{store.planets[params.theid].name}</h1>
					<p className="text-white">
						Lorem Ipsum has been the industrys standard dummy text ever since the 1500.
					</p>
				</div>
			</div>
			<hr className="my-4 bg-danger" />
			<div className="row">
				<div className="col-2 text-center">
					<h2 className="text-white">Name</h2>
					<p className="text-white">{store.planets[params.theid].name}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Climate</h2>
					<p className="text-white">{store.planets[params.theid].climate}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Population</h2>
					<p className="text-white">{store.planets[params.theid].population}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Orbital Period</h2>
					<p className="text-white">{store.planets[params.theid].orbital}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Rotation Period</h2>
					<p className="text-white">{store.planets[params.theid].Rotation}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Diameter</h2>
					<p className="text-white">{store.planets[params.theid].Diameter}</p>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<Link to="/">
					<span className="btn btn-danger btn-lg" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Cardplanets.propTypes = {
	match: PropTypes.object
};
