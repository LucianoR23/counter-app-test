import React from 'react';
import ReactDOM from 'react-dom';
import { FirstApp } from './FirstApp';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
)