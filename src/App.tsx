import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './components/Acceuil/Home'
import clsx from 'clsx'
import './App.css'

const Root = (): React.JSX.Element => {
  return <>
    <Header/>
    <div className={clsx("w-sreen h-[calc(100vh-80px)]")}>
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
        path: "/",
        element: <Home/>
      },
      {
        path: "nosProduits",
        element: <p>Nos produits</p>
      },
    
      {
        path: "contact",
        element: <p>Nous contacter</p>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
