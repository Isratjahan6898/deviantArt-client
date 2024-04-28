import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProvider";


const Register = () => {

    const{createUser} = useContext(AuthContex);
    console.log(createUser)
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name= form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password= form.get('password');
        console.log(name, email,photo, password)

        //create User

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })

       .catch(error=>{
        console.error(error)
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