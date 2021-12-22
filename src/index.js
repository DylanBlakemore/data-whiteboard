import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

function renderApp(NextApp) {
  ReactDOM.render(
    <React.StrictMode>
      <NextApp />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default

      renderApp(NextApp)
    })
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
renderApp(App)
