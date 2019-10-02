import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Success extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		return (
			<MuiThemeProvider>
					<h1 className="Thank">Thank you</h1>
			</MuiThemeProvider>
		);
	}
}

export default Success;
