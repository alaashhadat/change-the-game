import React, { Component } from 'react';
import footerImage from '../img/footer.png';
export default class Footer extends Component {
	render() {
		return (
			<footer className="page-footer font-small cyan darken-3">
				<div className="footer-image">
					<img className="img-fluid" src={footerImage} alt="Logos" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12 py-5">
							<div className="mb-5 flex-center">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.facebook.com/Change-the-Game-Academy-449989872074091/"
									className="fb-ic"
								>
									<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://twitter.com/CTGAcademy"
									className="tw-ic"
								>
									<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.linkedin.com/company/change-the-game-academy"
									className="li-ic"
								>
									<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3">
					© 2019 Copyright:{' '}
					<a target="_blank" rel="noopener noreferrer" href="https://www.changethegameacademy.org">
						Change The Game Academy
					</a>
				</div>
			</footer>
		);
	}
}
