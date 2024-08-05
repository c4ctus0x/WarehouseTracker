import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import WarehouseList from './components/WarehouseList';
import WarehouseDetails from './components/WarehouseDetails';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/warehouses" component={WarehouseList} />
                <Route path="/warehouse/:id" component={WarehouseDetails} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));