import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Header } from './components/Header/Header'
import { Gallery } from './components/Products/Gallery'
import clsx from 'clsx'
import './App.css'

const Root = (): React.JSX.Element => {
  return <>
    <Nav/>
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
        element: <Header/>
      },
      {
        path: "nosProduits",
        element: <Gallery/>
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
