import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import fins_banner from './assets/banner_fins.png';
import decks_banner from './assets/banner_decks.png';
import BoardBag_banner from './assets/banner_boardBags.png';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route
          path='/fins'
          element={<ShopCategory banner={fins_banner} category='fins' />}
        />
        <Route
          path='/decks'
          element={<ShopCategory banner={decks_banner} category='decks' />}
        />
        <Route
          path='/board-bags'
          element={
            <ShopCategory banner={BoardBag_banner} category='board-bags' />
          }
        />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
