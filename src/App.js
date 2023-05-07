
import './App.css';
import Footer from './Navbar/Footer';
import Header from './Navbar/Header';
import List from './Navbar/List';
import CartProvider from './Navbar/Store/CartProvider';

function App() {
  return (
    <CartProvider>
    
      <Header/>
      <List/>
      <Footer/>
   
    </CartProvider>
  );
}

export default App;
