import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchRecipes from './pages/SearchRecipes'
import SavedRecipes from './pages/SavedRecipes'
// import CreatedRecipes from './pages/CreateRecipes'
import About from './pages/About'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div className='container text-center'><img src='404.jpeg' width="50%" margin-top="30px"></img><h1 className='display-2'>Wrong page!</h1></div>,
    children: [
      {
        index: true,
        element: <SearchRecipes />
      }, {
        path: '/saved',
        element: <SavedRecipes />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      // {
      //   path: '/create',
      //   element: <CreateRecipes />
      // },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
