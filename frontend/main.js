// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.log({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import WarehouseList from './components/WarehouseList';
import WarehouseDetails from './components/WarehouseDetails';
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

const Main = () => {
    return (
        <ErrorBoundary> {/* Wrap the Router in ErrorBoundary */}
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/warehouses" component={WarehouseList} />
                    <Route path="/warehouse/:id" component={WarehouseDetails} />
                </Switch>
            </Router>
        </ErrorBoundary>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));

state = {
    error: null,
};

fetchData() {
    fetch(`${API_BASE_URL}/endpoint`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // process data
    })
    .catch(error => {
        this.setState({ error: error.toString() });
    });
}

render() {
    if (this.state.error) {
        return <div>Error: {this.state.error}</div>;
    }
    // regular render
}