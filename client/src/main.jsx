import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchRecipes from './pages/SearchRecipes'
import SavedRecipes from './pages/SavedRecipes'
import CreateRecipes from './pages/CreateRecipes.jsx'
import Profile from './pages/Profile.jsx'
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2 text-center'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <SearchRecipes />
      }, {
        path: '/saved',
        element: <SavedRecipes />
      },
      {
        path: '/create',
        element: <CreateRecipes />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
