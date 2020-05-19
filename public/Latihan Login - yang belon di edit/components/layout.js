import React from 'react'
import Link from 'next/link'

const Layout =({header,isi,footer}) => (
    <layout>
        <div>
            {header}
        </div>
        <div>
            {isi}
        </div>
        <div>
            {footer}
        </div>
    </layout>
)
export default Layout