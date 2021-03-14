import React from 'react'
import { A } from 'hookrouter'

function Footer() {
    const date = new Date()

    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
                © {date.getFullYear()} Copyright:&nbsp;
                <A href="/">Company Name</A>
            </div>
        </footer>
    )
}

export default Footer
