import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider id="form">
				<section>
					<h4 className="donate">Donate</h4>
					<TextField
						hintText="First name"
						floatinglabeltext="First name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					></TextField>
					<br></br>
					<TextField
						hintText="Last name"
						floatinglabeltext="last name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					></TextField>
					<br></br>
					<TextField
						hintText="Email Address"
						floatinglabeltext="email"
						onChange={handleChange('email')}
						defaultValue={values.email}
					></TextField>
					<br></br>
					<RaisedButton
						label="Continue"
						default={true}
						style={styles.button}
						onClick={this.continue}
					></RaisedButton>
				</section>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15,
	},
};
export default FormUserDetails;
