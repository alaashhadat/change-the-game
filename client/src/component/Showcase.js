import React, { Component } from 'react';
import cover from '../img/cover.jpg';
export default class Showcase extends Component {
	render() {
		return (
			<div>
				<img alt="cover" className="cover" src={cover}></img>
			</div>
		);
	}
}
