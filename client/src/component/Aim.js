import React, { Component } from 'react';
import Slider from './Slider';
import mission from '../img/mission.png';

export default class Aim extends Component {
	render() {
		return (
			<section id="aim" className="section bg-light">
				<img className="w3-container" src={mission} alt="" />
				<p className="text-lead">
					Change the Game Academy aims at empowering Self Help Groups (SHGs), Community Based Organisations
					(CBOs) and Non-Governmental Organisations (NGOs) all over the world, but especially in low and
					middle income countries.
				</p>
				<Slider />
			</section>
		);
	}
}
