import React from 'react'
import Link from 'next/link'

const Footer = () => (
<footer>
    <h3 ClassName="Tulisan"> Footer </h3>
    <p>Copyright<span className="later"> Tani<span className="sub"> Pintar </span></span>@2019</p>
<style jsx>{`
    .tulisan{
        color:gray;
    }
    .spas{
        padding:5px;
        margin:auto;
    }
    .sub{
        color:darkorange;
    }
    .later{
        background-color: green;
        padding:5px;
        color:azure;
    }
    `}</style>
  </footer>
)
export default Footer
