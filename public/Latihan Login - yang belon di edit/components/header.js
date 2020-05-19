import React from 'react'
import Link from 'next/link'

const Header = () => (
<footer>
    <h3 className="tulisan">Header</h3>
    <p>dari komponen header</p>
    <style jsx>{`
    .tulisan{
        color:gray;
    }
    .spas{
        padding:5px;
        margin:auto;
    }
    .sub{
        color:orange;
    }
    `}</style>
</footer>
)
export default Header