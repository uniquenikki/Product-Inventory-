import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Register from './Register';
import Product from './funcComponent';
import AddProduct from './AddProduct';
import ShowData from './ShowData';
function App() {
  return (
    <>
    <div className="App">
    {<Router>
       <Switch>
        <Route exact path='/' component={Register}/>
        <Route exact path='/AddProduct' component={AddProduct}/>
        </Switch>
    </Router>}
//     <AddProduct/>
  {/* <Register/>
      <ShowData/> */}
    </div>
    </>
    // <showData/>
  );
}

export default App;
