import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import vision from '../img/vision.png';
import children from '../img/child2.jpg';
import graduation from '../img/graduation.jpeg';

const pictures = [
	{
		src: vision,
	},
	{
		src: children,
	},
	{
		src: graduation,
	},
];

const Slider = () => <UncontrolledCarousel items={pictures} indicators={false} autoPlay={false} />;

export default Slider;
