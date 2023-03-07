import React from 'react';
import mealsImage from '../../assets/mealsHeader.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<HeaderCartButton onClick={props.showCartHandler} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table of delicious food!" />
			</div>
		</>
	);
};

export default Header;
