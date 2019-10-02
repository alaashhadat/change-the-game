import React, { Component } from 'react';

// Components
import Aim from './component/Aim';
import Child from './component/Child';
import Why from './component/Why';
import Footer from './component/Footer';
import UserForm from './component/UserForm';
import Showcase from './component/Showcase';
import { Container } from 'reactstrap';
import Slider from './component/Slider';
import Logo from './component/Logo';
import ScrollToTop from './component/ScrollToTop';
import OnlineCourses from './component/OnlineCourses';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	state = {
		fadeIn: false,
	};

	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (window.innerHeight > 300) {
				this.setState({
					fadeIn: true,
				});
			} else {
				this.setState({
					fadeIn: false,
				});
			}
		});
	}

	render() {
		const { fadeIn } = this.state;
		return (
			<Container>
				<Logo mt-10px />
				<Showcase />
				<Aim />
			
				<Why />
				<OnlineCourses />
				<Child />
				<UserForm />
				<ScrollToTop fadeIn={fadeIn} />
				<Footer />
			</Container>
		);
	}
}

export default App;
