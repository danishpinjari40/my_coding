import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { ProductPage } from '../Page/Durgesh_Folder/Pages/ProductPage';
import { SinglePageProduct } from '../Page/Durgesh_Folder/Pages/SinglePageProduct';
import { HomePage } from '../Page/Durgesh_Folder/Pages/homePage';
import { SearchBar } from '../Page/Manisha_Wadhe_Folder/SearchBar';

//* danish added
import Cart from '../Page/Durgesh_Folder/Pages/Cart';
import cartStore from '../Danish Pinjari/store/store';
import { Provider } from 'react-redux';
import WishList from '../Page/Durgesh_Folder/Pages/WishList';

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/productLaptop" element={<ProductPage />}></Route>
				<Route
					path="/productLaptop/:id"
					element={<SinglePageProduct />}
				></Route>
				<Route path="/search" element={<SearchBar />}></Route>
				<Route
					path="/cart"
					element={
						<Provider store={cartStore}>
							<Cart />
						</Provider>
					}
				></Route>
				<Route
					path="/wishlist"
					element={
						<Provider store={cartStore}>
							<WishList />
						</Provider>
					}
				></Route>
			</Routes>
		</div>
	);
};

export { AllRoutes };
