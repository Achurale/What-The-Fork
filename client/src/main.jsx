import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchRecipes from './pages/SearchRecipes'
import SavedRecipes from './pages/SavedRecipes'

import CreateRecipes from './pages/CreateRecipes.jsx'
import Profile from './pages/Profile.jsx'
import Saved from './pages/RecipePage.jsx'

import About from './pages/About';
import RecipePage from './pages/RecipePage.jsx'

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
      {
        path: '/recipe/:id',
        element: <RecipePage/>
      },
      // {
      //   path: '/saved/:id',
      //   element: <Saved />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
