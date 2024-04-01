import { clsx } from "clsx"
import { Outlet } from 'react-router-dom'
import { Nav } from '../Nav/Nav'

export const Root = (): React.JSX.Element => {

    return <>
      <Nav/>
      <div className={clsx("w-sreen h-[calc(100vh-80px)]")}>
        <Outlet/>
      </div>    
    </>
}