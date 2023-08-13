import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import MovieDetails from './components/MovieDetails'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { MovieContextProvider } from './context/MovieContext'
import './index.css'

const AppLayout = () => (
  <div className='app'>
    <Header />
    <Outlet />
  </div>
)

const appRoute = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Movies />
      },
      {
        path : "/watchlist",
        element : <Watchlist />
      },
      {
        path : "/movies/:movieID",
        element : <MovieDetails />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieContextProvider>
      <RouterProvider router={appRoute}/>
    </MovieContextProvider>
  </React.StrictMode>,
)
