import { createRoot } from 'react-dom/client'

import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
})
