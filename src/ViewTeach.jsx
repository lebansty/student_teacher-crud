import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewTeach() {
let param = useParams();
const[teach,setVal] = useState([]);

useEffect(()=>{
viewData();
},[])

let viewData = async () =>{
try {
    let tData = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/teachers/${param.id}`)
setVal(tData.data)

} catch (error) {
    console.log(error)
}
}

  return (
    <>
  <div className='container'>
<div className='row-col-lg-12'>

<div>ViewTeach</div> <br/>

<h1>{teach.name}</h1>
<h3>{teach.email}</h3>
<h3>{teach.gender}</h3>
<h3>{teach.subject}</h3>

</div>
  </div>
</>
  )
}

export default ViewTeach