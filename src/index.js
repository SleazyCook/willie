import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/app/App.js'
import ErrorPage from './components/app/ErrorPage.js'

import Home from './components/pages/home/Home.js'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact.js'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)