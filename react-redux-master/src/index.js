import React from 'react';
import ReactDOMClient from 'react-dom/client'
import { StrictMode } from 'react';
import App from './App';

import {configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import counter from './reducers'

//Create the store
const myStore = configureStore({reducer:{ counter}});

//This will console log the current state everytime the state changes
myStore.subscribe(()=>console.log(myStore.getState()));

//Enveloping the App inside the Provider, ensures that the states in the store are available
//throughout the application
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<StrictMode><Provider store={myStore}><App/></Provider></StrictMode>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();