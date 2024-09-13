import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
])

function App() {

  return (
    <>
<RouterProvider router={routes} />
    </>
  )
}

export default App
