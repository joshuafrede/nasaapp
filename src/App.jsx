import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import {useState,useEffect} from "react"

function App() {


  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  function handlerToggleModal(){
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY= import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' +
      '?api_key='+NASA_KEY+"&hd=True&thumbs=True&concept_tags=True"  
      const today= new Date().toDateString()
      const localKey = `NASA~`+today
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetch from cached today")
        return
      }
      localStorage.clear()
      
      try {
        const res = await fetch (url)
        const apiData = await res.json()
        setData(apiData)
        localStorage.setItem(localKey,JSON.stringify(apiData))
        console.log("Fetch from Api Today")
      } catch (error) {
        console.log(error.messsage)
      }
    }

    fetchAPIData()
  }, [])
  
  
  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div className='loadingState'>
            <i className="fa-solid fa-gear"></i>
        </div>
      ) }
      {data && showModal && (<Sidebar data={data} showModal={showModal} handlerToggleModal={handlerToggleModal}/>)}
      {data && <Footer data={data} showModal={showModal} handlerToggleModal={handlerToggleModal} />}
    </>
  )
}

export default App
