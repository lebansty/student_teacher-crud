import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Teachers() {
 
const [dataVal,setData] = useState([])
    const [isLoading,setLoading] = useState(false)

useEffect(()=>{
  teachData();
},[])


    let teachData = async ()=>{
        setLoading(true)
try {
    let value = await axios.get('https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/teachers')

    setData(value.data)
    setLoading(false)
} catch (error) {
    
}

    }
    let teachDel =async(id)=>{
try {
  await axios.delete(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/teachers/${id}`)
  teachData();
} catch (error) {
  
}
    }

    

  return (
    <>
      <div className='container-fluid'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Products</h1>
          {/* <Link to="/Portal/AddProduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add product</Link> */}

        </div>
        {
          isLoading ? (<div class="mx-auto" style={{width: "200px"}}>
          <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      ) :<div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Teachers</h6>

      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Email</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Email</th>
                
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
            {
              dataVal.map((item,index)=>{

                return <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.subject}</td>
                  <td>$ {item.email}</td>
                  
                  <td>
                    <Link to={`/view-teach/${item.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                    <Link to={`/teacher-edit/${item.id}`} className="btn btn-sm btn-info
                     mr-2">Edit</Link>
                    
                    <button onClick={()=>teachDel(item.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                  </td>

                </tr>

              })
            }


            </tbody>
          </table>
        </div>
      </div>
    </div>
        }
        




      </div>
    </>
  )
}

export default Teachers