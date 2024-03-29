import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React - CRUD Example with React Hook</h1>
            <p>An example app showing how to list, add, edit and delete product records with React and ASP.net Core API.</p>
            <p><Link to="products">&gt;&gt; Manage Products</Link></p>
        </div>
    );
}

export { Home };