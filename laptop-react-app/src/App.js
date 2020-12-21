import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Home } from './components/layout/Home';
import { Nav } from './components/layout/Nav';

import { Products } from './components/products/Index';

function App() {
    const { pathname } = useLocation();  

    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
