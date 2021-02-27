import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cardperson = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-transparent">
			<div className="row">
				<div className="col-6">
					<img src="http://i.giphy.com/2EaMq3hfnmhtm.gif" />
				</div>
				<div className="col-6 text-center">
					<h1 className="display-4 text-white">{store.persons[params.theid].name}</h1>
					<p className="text-white">
						Lorem Ipsum has been the industrys standard dummy text ever since the 1500.
					</p>
				</div>
			</div>
			<hr className="my-4 bg-danger" />
			<div className="row">
				<div className="col-2 text-center">
					<h2 className="text-white">Name</h2>
					<p className="text-white">{store.persons[params.theid].name}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Birth Year</h2>
					<p className="text-white">{store.persons[params.theid].birthYear}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Gender</h2>
					<p className="text-white">{store.persons[params.theid].gender}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Height</h2>
					<p className="text-white">{store.persons[params.theid].height}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Skin Color</h2>
					<p className="text-white">{store.persons[params.theid].skin}</p>
				</div>
				<div className="col-2 text-center">
					<h2 className="text-white">Eye Color</h2>
					<p className="text-white">{store.persons[params.theid].eyes}</p>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<Link to="/">
					<span className="btn btn-danger btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Cardperson.propTypes = {
	match: PropTypes.object
};
