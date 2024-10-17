import SideNavbar from "../componenet/SideNavbar";

import React from 'react'

const layout = ({children}) => {
  return (

        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          <nav></nav>
     <SideNavbar/>
          {children}
        </section>
  )
}

export default layout