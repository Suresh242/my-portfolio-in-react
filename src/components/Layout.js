import React from 'react'
import { TopNav } from './TopNav'
import { Footer} from './Footer'

export const Layout = ({children}) => {
  return (
    <div>
       <TopNav/>
        <div className="layout pt-5 mt-5">{children}</div>
<Footer/>  
    </div>
  )
}
