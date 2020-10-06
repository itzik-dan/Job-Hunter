import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
	const renderContent = () => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<a href="/publishers">Publishers</a>
					</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>,
				];
		}
	};

	return (
		<nav className="position black">
			<div className="nav-wrapper">
				<Link to={auth? '/jobs' : '/'} className="brand-logo">
					<i className="fas fa-running" />
					Job Hunter
				</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Navbar);
