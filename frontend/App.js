import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import InventoryListView from './components/InventoryList';
import ProductDetailView from './components/ProductDetails';
import NotFoundPage from './components/NotFound';

const MainAppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/inventory" component={InventoryListView} />
          <Route path="/product/:productId" component={ProductDetailView} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default MainAppRouter;