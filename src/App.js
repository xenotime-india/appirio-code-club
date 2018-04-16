import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './Routes/Routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import {
  BrowserRouter as Router
} from "react-router-dom";


import reducers from './reducers'
import { GlobalNav } from './components/GlobalNav/GlobalNav'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')
console.log(token);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Router>
                <div>
                  <GlobalNav/>
                    <div className="slds-grid slds-grid_align-center body_container">
                      <div className="slds-col slds-size_1-of-1">
                      <Routes />
                      </div>
                    </div>
                </div>
              </Router>
            </Provider>
        )
    }
}