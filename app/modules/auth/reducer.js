import { AsyncStorage } from 'react-native';

import * as actionTypes from './actionTypes';

let initialState = { isLoggedIn: false, user: null };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            const user = action.data;

            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['user', JSON.stringify(user)]
            ]);

            state = Object.assign({}, state, { isLoggedIn: true, user: user });

            return state;

        case actionTypes.LOGGED_OUT:
            let keys = ['user'];
            AsyncStorage.multiRemove(keys);

            state = Object.assign({}, state, {isLoggedIn: false, user: null });

            return state;

        default:
            return state;
    }
};

export default reducer;