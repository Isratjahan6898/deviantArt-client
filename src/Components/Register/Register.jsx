import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [registerError, setRegistError]= useState('');

    const{createUser} = useContext(AuthContex);

    const location= useLocation();
  console.log('location in the login page',location)
  const navigate = useNavigate();
  //console.log(createUser)
  const from = "/";
    console.log(createUser)
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name= form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password= form.get('password');
        console.log(name, email,photo, password)
        setRegistError('');

        if(password.length <6){
            setRegistError ('password should be 6 character');
            return;
          }
          else if(/A-Z/.test(password)){
                
            setRegistError('At least one upperCase letter need');
            return;
          }
      
          else if (!/[a-z]/.test(password)) {
            setRegistError('Password must contain at least one lowercase letter');
            return;
          }

        //create User

        createUser(email, password)
        .then(result =>{
            console.log(result.user);

            toast.success("user resister Create Successfully")
            navigate(from);
        })

       .catch(error=>{
        console.error(error);
        setRegistError(error.message)
       })
    }
    return (
        <div>
                     <div className=" bg-base-200">

<p className="font-bold pt-[20px] text-5xl text-center text-[#FF497c]">Please Resister Here</p>
<div className="mx-[30px] lg:w-1/2 lg:mx-[290px] py-[30px] ">

<div className=" shadow-2xl ">


<form onSubmit={handleRegister} className="card-body">

<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="name" name="name" placeholder="name" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" name="email" placeholder="email" className="input input-bordered" required />
</div>

<div className="form-control">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" name="password" placeholder="password" className="input input-bordered" required />
<label className="label">
<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>

{
          registerError&& <p className="text-red-600">{registerError}</p>
        }
<div className="form-control mt-6">
<button className="btn bg-[#FF497c]">Register</button>
</div>
</form>
<div className="mx-[40px] pb-[40px]">
<p>Already account??? plz</p>

<Link to='/login'><button className="text-2xl font-bold text-blue-600">Login</button></Link>

</div>


</div>
</div>
</div>
        </div>
    );
};

export default Register;