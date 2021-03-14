import React from 'react'
import { Container } from 'react-bootstrap'

import { HomePage } from './HomePage'
import { ContactPage } from './ContactPage'
import { NotFoundPage } from './NotFoundPage'

export default function Page({ children }) {
    return <Container className="p-3">{children}</Container>
}

export { HomePage, ContactPage, NotFoundPage }
