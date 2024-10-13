import React from 'react'

export default function Footer(props) {

    const {showModal,handlerToggleModal,data} = props

    return (
        <footer>
            <div className='bgGradient'></div>
        <div>
        <h2>APOD Project Nasa</h2>
        <h1>{data?.title}</h1>
        <h2>{data?.copyright}</h2>
        </div>
        <button onClick={()=>{handlerToggleModal(showModal)}}>
            <i className='fa-solid fa-circle-info'></i>
        </button>
        </footer>
    )
}
