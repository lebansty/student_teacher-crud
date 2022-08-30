import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
function TeacherEdit() {
    const param= useParams();
    let navi = useNavigate()

useEffect(()=>{
loadData();
},[])

const formik = useFormik({
    initialValues:{
        name:'',
        gender:'',
        subject:'',
        email:''
    },
  
    onSubmit: async (values)=>{
try {
    await axios.put(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/teachers/${param.id}`,values)
navi('/teachers')
} catch (error) {
    console.log(error)
}
    }
})

let loadData = async (values)=>{
try {
    let val = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/teachers/${param.id}`,values)
    formik.setValues({
        name:val.data.name,
        gender:val.data.gender,
        subject:val.data.subject,
        email:val.data.email
    })
} catch (error) {
    console.log(error)
}
}

  return (
    <>
    <h3>Edit Teacher {param.id}</h3>
    <div className='container mt-5'>

        <form onSubmit={formik.handleSubmit}>
            <div className="row">
<div className="col-lg-6">
    <label for="name">Name</label>
    <input value={formik.values.name} onChange={formik.handleChange} name="name" className='form-control' id="name" type="text" required />
</div>
<div className="col-lg-6">
    <label for="email">Email</label>
    <input value={formik.values.email} onChange={formik.handleChange} name="email" className='form-control' id="email" type="email" required />
</div>
            </div>
            <div className="row">
<div className="col-lg-6">
    <label for="sub">Subject</label>
    <input value={formik.values.subject} onChange={formik.handleChange} name="subject" className='form-control' id="sub" type="text" required />
</div>
<div className="col-lg-6">
    <label for="gen">Gender</label>
    <input value={formik.values.gender} onChange={formik.handleChange} name="gender" className='form-control' id="gen" type="text" required />
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

export default TeacherEdit