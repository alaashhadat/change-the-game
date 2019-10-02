import React, { Component } from 'react';

export default class OnlineCourses extends Component {
	render() {
		return (
			<section className="online-courses-section">
				<a
					href="https://www.changethegameacademy.org/online-courses/mobilising-support"
					target="_blank"
					rel="noopener noreferrer"
					className="online-courses"
				>
					Online Courses
				</a>
				<p className="courses-text">
					Our online courses are free of charge. They aim to strengthen the capacity of civil society
					organizations worldwide on the themes of local fundraising and mobilizing support. If you have a
					disability impeding you to take the courses, please contact us and we will see how we can assist
					you. courses on mobilizing support topics Each course starts with a brief introduction on content
					and duration.
				</p>
			</section>
		);
	}
}
