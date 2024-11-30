import { buttonBaseClasses } from '@mui/material';
import React, { useState } from 'react'
 

    const EmployeeForm = ({ onSuccess }) => {
        const [formData, setFormData] = useState({ name: "", position: "", salary: "" });
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
      
            try {
                await API.post("/employees", formData);
                onSuccess();
            } catch (err) {
                console.error(err);
            }
        };
  return (
    <box>
<div > 

<form onSubmit={handleSubmit}>
            <h3>Add Employee</h3>
            <div>
                <label>Name</label>
          
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <br></br>
            <div>
                <label>Position</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />
            </div><br></br>
            <div>
                <label>Salary</label>
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
            </div><br></br>
            <button  type="submit" variant='contained' > Add Employee</button>
        </form>
    


    </div>
    </box>
  )
}

export default EmployeeForm