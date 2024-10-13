import React from 'react'

export default function Sidebar(props) {

    const {showModal,handlerToggleModal,data} = props
    
  return (
    <>
    <div className='sidebar'>
        <div className='bgOverlay'></div>
        <div className='sidebarContent'>
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
            <p>{data?.date}</p>
            <p className='descriptionTitle'>{data?.explanation}</p>            
            </div>
            <button onClick={()=>{handlerToggleModal(showModal)}}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
    </div>
    </>
  )
}
