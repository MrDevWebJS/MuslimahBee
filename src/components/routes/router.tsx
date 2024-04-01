import { Root } from './Root'
import { createBrowserRouter } from 'react-router-dom'
import { Header } from '../Home/Header'
import { Gallery } from '../Products/Gallery'
import { SingleProduct } from '../Products/SingleProduct'

export const router = createBrowserRouter([
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
          children: [
            {
              path: "",
              element: <Gallery/>
            },
  
            {
              path: ":id",
              element: <SingleProduct/>
            }
          ]
        },
      
        {
          path: "contact",
          element: <p>Nous contacter</p>
        }
      ]
    }
])