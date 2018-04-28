// The reducers are the in charge of updating the state of our app. In the redux folder, create the rootReducer.js file. In this file, we will import the reducers from our modules and use redux combineReducers function to merge them together into a single state object that we will later use to create our redux store.

import { combineReducers } from 'redux';

import { reducer as authReducer } from "../modules/auth"
import { reducer as homeReducer } from "../modules/home"
import { reducer as insightReducer } from "../modules/insight"
import { reducer as insightsReducer } from "../modules/insights"
import { reducer as navbarReducer } from "../modules/navbar"

// Combine all the reducers
const rootReducer = combineReducers({ authReducer, homeReducer, insightReducer, insightsReducer, navbarReducer });

export default rootReducer;