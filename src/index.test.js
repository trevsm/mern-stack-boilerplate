import React from 'react'
import { shallow } from 'enzyme'
import { App } from './index.js'
import { findByTestAttr } from '../utils/Utils'

const setUp = () => {
    const component = shallow(<App />)
    return component
}

describe('Main Component', () => {
    let component

    beforeEach(() => {
        component = setUp()
    })

    it('Should render nessessary parts', () => {
        const parts = ['main']
        parts.forEach((e) => {
            const p = findByTestAttr(component, e)
            expect(p.length).toBe(1)
        })
    })
})
