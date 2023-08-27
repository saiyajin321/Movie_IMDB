import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './routers/index.jsx'
import store from './store/index.js'

function App() {
  return (
    <>
      <Provider store ={store}>
        <RouterProvider router = {router}/>
      </Provider>
    </>
  )
}

export default App
