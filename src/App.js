import {useState , useEffect} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact1 from './pages/Contact1';
import { BrowserRouter as Router , Route  , Switch } from "react-router-dom";
import Contact2 from './pages/Contact2';
import ProductDetail from './components/Products/ProductDetail';
import Products from './components/Products/Products';
import { ProductContext } from "./components/Products/ProductContext";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import CheckOut from './components/CheckOut';

const App = () => { 

  const [data,setdata] = useState([]);
  const Url ='https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setdata(res.data))
  } , []);
    
    return (
      <div className="App">
        
        <Router>
          <ProductContext.Provider value={{data,setdata , Url}}>
          <Header/>
          <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/contact-us-1' component={Contact1}/>
          <Route exact path ='/contact-us-2' component={Contact2}/>
          <Route exact path ='/cart' component={Cart}/>
          <Route exact path ='/products/:id' component={ProductDetail}/>
          <Route exact path ='/products' component={Products}/>
          <Route exact path='/checkout' component={CheckOut}/>
          </Switch>
          <Footer/>
          </ProductContext.Provider>
        </Router>

      
        </div>
    );
  }

 


export default App;
