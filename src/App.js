// React
import React, { useState, useEffect } from 'react';
// React DOM
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Castom hook
import { AuthProvider } from './Components/Pages/Register/AuthContext'

// Css
import './Components/main.css';
// Header Footer
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Pages
import Home from './Components/Main/Home';
import Policy from './Components/Pages/Policy/Policy';
import MarketPage from './Components/Pages/Shop/ShopSmall/MarketPage'
import AllShop from './Components/Main/ShopCard/AllShop';
import CheckoutForm from './Components/Pages/Basket/CheckoutForm'
import ConfirmOrder from './Components/Pages/Basket/ConfirmOrder';

// Register
import Register from './Components/Pages/Register/Register';
import LogIn from './Components/Pages/Register/LogIn';
import ForgotPassword from './Components/Pages/Register/ForgotPassword';
import { GoogleOAuthProvider } from '@react-oauth/google'

function Layout({ children }) {
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hideHeaderAndFooterPaths = ['/register', '/login', '/forgotpassword'];
    setShowHeaderAndFooter(!hideHeaderAndFooterPaths.includes(location.pathname.toLowerCase()));
  }, [location]);

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
		<GoogleOAuthProvider clientId='117619082455-f18b14g292ht5jsud9qm5bmr7ppl53hi.apps.googleusercontent.com'>
			<AuthProvider>
				<div className='App'>
					<Router>
            <Routes>
              <Route path="/shop/:slug" element={<MarketPage />} />
              <Route path='/' element={<Layout><Home /></Layout>} />
              <Route path='/policy' element={<Layout><Policy /></Layout>} />
              <Route path="/stores/:slug" element={<Layout><MarketPage /></Layout>} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/AllShop' element={<Layout><AllShop /></Layout>} />
              <Route path='/CheckoutForm' element={<Layout><CheckoutForm /></Layout>} />
              <Route path='/ConfirmOrder' element={<ConfirmOrder />} />
            </Routes>
          </Router>

					
				</div>
			</AuthProvider>
		</GoogleOAuthProvider>
	)
}

export default App;
