import React, { Component } from 'react';

export default class Why extends Component {
	render() {
		return (
			<section id="why" className="section">
				<h2 className="section-head">
					<i className="fas fa-hand-holding-usd"></i> Why raise funds locally?
				</h2>
				<h3>Embrace the challenge of local fundraising</h3>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						title="fund"
						className="embed-responsive-item"
						width="640"
						height="360"
						src="https://www.youtube.com/embed/kLrt3yDs9h8"
						frameBorder="0"
						allow="accelerometer;
            autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</section>
		);
	}
}
