import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
                     <div className=" bg-base-200">

<p className="font-bold pt-[20px] text-5xl text-center text-blue-800">Please Resister Here</p>
<div className="mx-[30px] lg:w-1/2 lg:mx-[290px] py-[30px] ">

<div className=" shadow-2xl ">


<form className="card-body">

<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="name" placeholder="name" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" placeholder="email" className="input input-bordered" required />
</div>

<div className="form-control">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<input type="text" placeholder="photo" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" placeholder="password" className="input input-bordered" required />
<label className="label">
<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Register</button>
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