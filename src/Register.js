import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import { Button ,Container} from 'react-bootstrap';
import showData from './ShowData';
const Register=()=>
{
    let history=useHistory();
   
 const[userRegistration,setUserRegistration]=useState(
     {
         username:'',
         email:'',
         phone:'',
         password:''
     }
 );
 const [records,setRecords]=useState([]);
const handleInput=(e)=>
{
const name = e.target.name;
const value=e.target.value;
setUserRegistration({...userRegistration,[name]:value})
}
const handleSubmit=(e)=>
{
    e.preventDefault();
    const newRecord = {...userRegistration,id:new Date().getTime().toString()}
    setRecords([...records , newRecord]);
    setUserRegistration({username:" " , email :" " , phone : " " , password : " "});
}

   return(
        <>
        <Container className='box px-5'>
        <h1 className='p-5'>REGISTER</h1>
         <form action="" onSubmit={handleSubmit}>
             <div className='inputData'>
             <label htmlFor='username'>Full Name</label>
             <input className='inputField' type='text' autoComplete="off" 
              value={userRegistration.username} onChange={handleInput} name="username" id='username'></input>
             </div>
             <div className='inputData'>
             <label htmlFor='email'>Email</label>
             <input className='inputField' type='email' autoComplete="off" 
            value={userRegistration.email} onChange={handleInput} name="email" id='email'></input>
             </div>
             <div className='inputData'>
             <label htmlFor='phone'>Phone</label>
             <input className='inputField' type='number' autoComplete="off"
            value={userRegistration.phone} onChange={handleInput} 
             name="phone" id='phone'></input>
             </div>
             <div className='inputData'>
             <label htmlFor='password'>Password</label>
             <input className='inputField' type='password' autoComplete="off" 
            value={userRegistration.password} onChange={handleInput} name="password" id='password'></input>
             </div>
             <div classname="p-5 mx-3">
             <Button  onClick={()=>history.push('/Product')} type='submit'>SUBMIT</Button>
             {/* <Button type='submit'>SUBMIT</Button> */}
             </div>
            </form> 
            
            </Container>
            
     </>
    )      
}

export default Register;