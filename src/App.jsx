
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [chefs,setChefs]=useState([])
useEffect(()=>{
fetch('https://server-chef-adsmarketersaif13-gmailcom.vercel.app/data')
.then(res=>res.json())
.then(data=>setChefs(data))

},[])

  return (
    <>
      {chefs.map(chef=><p key={chef.id}>{chef.category}</p>)}
    </>
  )
}

export default App
