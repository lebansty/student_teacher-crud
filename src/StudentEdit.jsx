import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

function StudentEdit() {
    const param= useParams();
    let navi = useNavigate()

useEffect(()=>{
loadData();
},[])

const formik = useFormik({
    initialValues:{
        name:'',
        createdAt:'',
        class:''
       
    },
  
    onSubmit: async (values)=>{
try {
    await axios.put(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/students/${param.id}`,values)
navi('/students')
} catch (error) {
    console.log(error)
}
    }
})

let loadData = async (values)=>{
try {
    let val = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/students/${param.id}`,values)
    formik.setValues({
        name:val.data.name,
        createdAt:val.data.createdAt,
        class:val.data.class
       
    })
} catch (error) {
    console.log(error)
}
}
  return (
    <>
    <h3>Edit Student {param.id}</h3>
    <div className='container mt-5'>

        <form onSubmit={formik.handleSubmit}>
            <div className="row">
<div className="col-lg-6">
    <label for="name">Name</label>
    <input value={formik.values.name} onChange={formik.handleChange} name="name" className='form-control' id="name" type="text" required />
</div>
<div className="col-lg-6">
    <label for="email">Created</label>
    <input value={formik.values.createdAt} onChange={formik.handleChange} name="createdAt" className='form-control' id="email" type="text" required />
</div>
            </div>
            <div className="row">
<div className="col-lg-6">
    <label for="sub">Class</label>
    <input value={formik.values.class} onChange={formik.handleChange} name="class" className='form-control' id="sub" type="text" required />
</div>

            </div>
            <div className="col-lg-6 mt-3">
                <input className='btn btn-primary' type="submit" value="Submit" />
            </div>
        </form>

    </div>
    </>
  )
}

export default StudentEdit