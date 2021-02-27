import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getState } from "../store/flux";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { element } from "prop-types";

export const Persons = () => {
	const { store, actions } = useContext(Context);
	return store.persons.map((item, index) => {
		return (
			<div className="col mb-5" key={index}>
				<div className="card h-100">
					<img
						src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{item.name}</h4>
						<h6>Gender: {item.gender}</h6>
						<h6>Hair Color: {item.hair}</h6>
						<h6>Eye-Color: {item.eyes}</h6>
					</div>
					<div className="card-footer text-right">
						<Link to={"/cardperson/" + index}>
							<button type="button" className="btn btn-outline-info">
								Learn More!
							</button>
						</Link>
						<button
							onClick={() => {
								actions.addFav(item);
							}}
							type="button"
							className="btn btn-outline-warning far fa-heart ml-2"
						/>
					</div>
				</div>
			</div>
		);
	});
};
