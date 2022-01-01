import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

const Layout = ({ pageTitle, children }) => {
  const [isExpanded, toggleExpansion] = React.useState(false)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} - 90to90</title>
        <link rel="canonical" href="https://90to90.benny.id/" />
        <meta name="description" content="90to90 adalah catatan perubahan gaya hidup untuk kualitas hidup yang lebih sehat, bahagia secara fisik, mental dan lebih ramah lingkungan" />
      </Helmet>
      <nav className="flex justify-between items-center flex-wrap bg-white-900 p-4 mt-0 w-full">
          <div className="flex text-black font-extrabold">
            <Link to="/" className="text-black text-base no-underline hover:no-underline">
              <StaticImage src="../images/90to90logo.png" alt="90to90 Logo" width={100}/>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-gray hover:border-2">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full lg:w-auto lg:flex pl-4 text-sm lg:mx-auto`}>
            <ul className="list-reset mt-4 lg:mt-0 lg:flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/story">Story</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/sleep">Sleep</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/eat">Eat</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/move">Move</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/money">Money</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/less">Less</Link>
              </li>
              <li className="mr-2">
                <Link className="mainmenu" to="/pages/mental">Mental</Link>
              </li>
            </ul>
          </div>
      </nav>
      <main>
        {children}
      </main>

      <footer>
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-6 gap-8 bg-white-900 border-t-2 mt-6">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><StaticImage alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
            </p>
          </div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Mental Health
            </h6>
            <p class="mb-4">
              <Link className="mainmenu" to="/pages/hope">Hope</Link>
            </p>
          </div>
          {/*
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Sleep Well
              </h6>
          </div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Move More
              </h6>
          </div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Eat Better
              </h6>
          </div>*/}
        </div>
      </footer>
    </div>
  )
}

export default Layout
