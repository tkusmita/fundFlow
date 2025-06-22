
import React from 'react'

const Layout = ({children}) => {
  return (
    <div >
        <div className='flex gap-2'>
        
        {children}
        </div>
  
        </div>
  )
}

export default Layout