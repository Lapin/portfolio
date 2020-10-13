import React from "react"
import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Layout = ({ location, title, children, pageContext }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      // <div className="flex space-x-10 py-12">
      //   <h1>
      //   <Link to="/">{title}</Link>
      //   </h1>
      //   <div>
      //     <ul className="flex space-x-6">
      //       <li>Works</li>
      //       <li>Projects</li>
      //       <li>About</li>
      //     </ul>
      //   </div>
      // </div>
      <div>

      </div>


    )
  } else {
    header = (
      <div className="mt-8 flex justify-between items-center" id="topAnchor">
      <Link className="smallButton" to="/">
        ← Go back
      </Link>
      <div className="text-base font-semibold text-gray-700">
        Korhan S. Eser
      </div>

      </div>
    )
  }

  return (
    <div className="max-w-screen-lg mx-auto px-12" data-is-root-path={isRootPath}>
      <header className="">{header}</header>

      <main>{children}</main>
      <footer className='text-sm py-12'>
        <div className="text-center">© {new Date().getFullYear()}</div>
        <div className="text-center"> Built and code by me with <span aria-label="heart" role="img">♥️</span> using Gatsby & React <br/> Check out the source on
        {` `}
        <a className="font-semibold underline" href="https://www.github.com">Github</a></div>
      </footer>
    </div>
  )
}

export default Layout
