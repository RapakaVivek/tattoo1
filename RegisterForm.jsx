import React, { useState } from 'react'

const RegisterForm = () => {
    const [formdata,setformdata]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        phonenumber:'',
    })


    const handlechange=(e)=>{
        const{name,value}=e.target;
        console.log(onchange)
        setformdata({
            ...formdata,  
            [name]:value
        })
    }




    const handlesubmit=async(e)=>{

        e.preventDefault();
        console.log(formdata)
        
        try{

            const response= await fetch('localhost:5000/register/Register',{
                method:'post',
                body:JSON.stringify(formdata),
                headers:{
                    "Content-Type": "application/json"
                }
                // mode:'cors'

            })

            const data=await response.json()
            console.log(data)

        }
        catch(err){
            console.log("error is " + err)

        }
    }


  return (
    <div className='RegisterForm-Conatiner'>
        <h1 style={{textAlign:'center'}}>Register Form</h1>

        <center>
        <form onSubmit={handlesubmit} method='post'>
            <input type="text" name='username' placeholder='Enter name' value={formdata.username} required onChange={handlechange} /> <br />
            <input type="email" name='email' placeholder='Enetr email' value={formdata.email} required onChange={handlechange} /> <br />
            <input type="password" name="password" placeholder='Password' value={formdata.password} required onChange={handlechange} /> <br />
            <input type='password' name='confirmPassword' placeholder='Conform Password' value={formdata.confirmPassword} required onChange={handlechange} /> <br />
            <input type="number" name='phonenumber' placeholder='Phone No' value={formdata.phonenumber} required onChange={handlechange} /> <br />  

            <input type="submit" name='submit' className='btn btn-primary'  />

        </form>
        </center>
       
    </div>
  )
}

export default RegisterForm


