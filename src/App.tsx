import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import clsx from 'clsx'
//import { Header } from './components/Header/Header'

const Root = () => {
  return <>
    <Header/>
    <div className={clsx("w-sreen h-[100%-80px]")}>
      <Outlet/>
    </div>    
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/nosProduits",
        element: <p>Nos produits</p>
      },
    
      {
        path: "/contacts",
        element: <p>Nous contacter</p>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
