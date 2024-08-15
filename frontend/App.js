import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import InventoryList from './components/InventoryList';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/inventory" component={InventoryList} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;