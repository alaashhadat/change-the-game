import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

class personalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.previousStep();
	};
	render() {
		return (
			<MuiThemeProvider id="form">
				<div id="form">
					<p>
						<h3>Please send your payment to the following  account </h3>
						<h5>Stichting Wilde Ganzen</h5>
						<div><strong>Address : </strong>IKON Heuvellaan 36 1217 JN Hilversum </div>
						<div><strong>IBAN :</strong> NL53INGB000 00 40 000</div>
						<div><strong>RSIN :</strong></div> 004040569 KVK:41192276
						<div><strong>Email :</strong>info@wildeganzen.nl</div>
						<div> <strong>Telefoon :</strong> +31 (0)35 625 1030</div>
					</p>
					<RaisedButton
						label="Continue"
						default={true}
						style={styles.button}
						onClick={this.continue}></RaisedButton>
					<RaisedButton
						label="back"
						default={true}
						style={styles.button}
						onClick={this.back}></RaisedButton>
				</div>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15,
	},
};
export default personalDetails;
