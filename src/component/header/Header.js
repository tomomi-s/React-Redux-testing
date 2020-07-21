import React from 'react'

const Header = () => {
	return (
		<header data-test="headerComponent">
			<div className="wrap">
				<div className="app-name" data-test="headerAppName">
					TestApp
				</div>
			</div>
		</header>
	)
}

export default Header