import React, { Component } from 'react';

import child from '../img/child.jpg';
export default class Child extends Component {
	render() {
		return (
			<section id="child" className="section bg-light">
				<div className="container">
					<div className="child">
						<div>
							<img src={child} alt="child" />
						</div>
						<div>
							<h2>Send a child to school</h2>
							<p>
								Give children a brighter future, Right now, you can make twice the impact to benefit
								children.
							</p>
							<p>
								It does not cost a fortune to send a child to a public elementary school. In our area of
								operations, all we need is (Euro 35-50) per year to buy a child to a new set of uniform,
								a school bag, a new pair of shoes, text books, school supplies, and some funds to pay
								for small school contributions. We provide the most basic things they need for school
								and encourage the parents to provide the rest as much as possible.
							</p>
							<hr />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
