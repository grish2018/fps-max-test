import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import * as reducers from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
    /* pass a configuration object here if needed */
});

function configureStore(initialState) {
    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history),
    });

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            logger,
            routerMiddleware(history)
        )
    );
}

export default configureStore();