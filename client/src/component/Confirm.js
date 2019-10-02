import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
	continue = e => {
		e.preventDefault();
		// process form

		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.previousStep();
	};
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<h3>Please Contact us for other information</h3>

					<RaisedButton
						label="Confirm and continue"
						default={true}
						style={styles.button}
						onClick={this.continue}></RaisedButton>
				</React.Fragment>
				<RaisedButton
					label="back"
					default={true}
					style={styles.button}
					onClick={this.back}></RaisedButton>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15,
	},
};
export default Confirm;
