import React from 'react'
import Link from 'next/link'

const Isi = ({konten}) => (
    <isi>
        <h3 className="tulisan">ISINYA</h3>
        <p>{konten}</p>
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
    </isi>
    )
    export default Isi