import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducers'
import App from './App'
import { loadState, saveState } from './localStorage'

const store = createStore(rootReducer, loadState('TS_DEMO'), composeWithDevTools())

store.subscribe(() => {
  saveState('TS_DEMO', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#app')
)

module.hot.accept();
