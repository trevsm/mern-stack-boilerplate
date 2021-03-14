import React from 'react'
import ReactDom from 'react-dom'
import { useRoutes } from 'hookrouter'

import Header from './components/header'
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'

import Page, { HomePage, ContactPage, NotFoundPage } from './components/pages'

const routes = {
    '/': () => <HomePage />,
    '/contact': () => <ContactPage />,
}

export function App() {
    const pageResult = useRoutes(routes)

    return (
        <div data-test="main">
            <Header />
            <Page>{pageResult || <NotFoundPage />}</Page>
            <Footer />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#app'))
