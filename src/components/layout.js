import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav className="bg-white-900 p-4 mt-0 w-full">
        <div className="container mx-auto flex items-center">
          <div className="flex text-black font-extrabold">
            <Link to="/" className="flex text-black text-base no-underline hover:no-underline">
              <StaticImage src="../images/90to90logo.png" alt="90to90 Logo" width={100}/>
            </Link>
          </div>
          <div className="flex pl-4 text-sm mx-auto">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-2">
                <Link className="mainmenu" to="/">Story</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/">Sleep</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/">Eat</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>

      <footer>
        <div className="bg-white-900">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><StaticImage alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
            </p>
            {/*
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="" className="text-gray-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout