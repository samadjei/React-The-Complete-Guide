import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
		console.log('clicked');
	};
	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<>
			{/* Render the cart if cartIsShown is true and not if it is false  */}
			{cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
			<Header showCartHandler={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
