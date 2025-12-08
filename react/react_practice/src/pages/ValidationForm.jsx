import React from 'react'
import { useState } from 'react'

function ValidationForm() {
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        gender:'',
    });

    const handleChange = (e)=>{
        let {name, value} = e.target;

            if(name=='name' && value.length>5){
            alert('Name should be below 5 characters')
            return
        }
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))

    
    }
  return (
    <form action="">
        
        <input className='border' type="text" name='name' value={formData.name} onChange={handleChange} />

        <input className='border' type="number" name='age' value={formData.age} onChange={handleChange} />

        <select className='border' name="gender" id="" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </form>
  )
}

export default ValidationForm