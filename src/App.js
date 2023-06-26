import './App.css';
import BlogPage from './Components/BlogPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ProductsPage from './Components/ProductsPage';
import SupportPage from './Components/SupportPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <ProductsPage/>
      <BlogPage/>
      <SupportPage/>
      <Footer/>
    </div>
  );
}

export default App;
