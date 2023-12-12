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
import ShopSmall from './Components/Pages/Shop/ShopSmall/ShopSmall';
import ShopMagnum from './Components/Pages/Shop/ShopMagnum/ShopMagnum';
import ShopGalmart from './Components/Pages/Shop/ShopGalmart/ShopGalmart';
import RestKFC from './Components/Pages/Shop/RestKFC/RestKFC';
import RestBK from './Components/Pages/Shop/RestBK/RestBK';
import RestHardees from './Components/Pages/Shop/RestHardees/RestHardees';

// Register
import Register from './Components/Pages/Register/Register';
import LogIn from './Components/Pages/Register/LogIn';
import ForgotPassword from './Components/Pages/Register/ForgotPassword';

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
    <AuthProvider>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Layout><Home /></Layout>} />
            <Route path='/policy' element={<Layout><Policy /></Layout>} />
            <Route path='/shopsmall' element={<Layout><ShopSmall /></Layout>} />
            <Route path='/shopmagnum' element={<Layout><ShopMagnum /></Layout>} />
            <Route path='/shopgalmart' element={<Layout><ShopGalmart /></Layout>} />
            <Route path='/restkfc' element={<Layout><RestKFC /></Layout>} />
            <Route path='/restbk' element={<Layout><RestBK /></Layout>} />
            <Route path='/resthardees' element={<Layout><RestHardees /></Layout>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
