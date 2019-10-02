import React from 'react';

export default function ScrollToTop({ fadeIn }) {
	return (
		<a className={fadeIn ? 'scroll-top fade-in' : 'scroll-top'} href="#toTop">
			<i className="fas fa-arrow-up"></i>
		</a>
	);
}
