import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const {signIn,  googleLogin, githubLogin } = useContext(AuthContex);
  const location =useLocation();
  const navigate = useNavigate();
  console.log('location i in the login page', location)
    const handleLogin= (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
          console.log(result.user);
          toast.success("user loging Create Successfully")

          navigate(location?. state? location.state : "/")
        })
        .catch(error=>{
          console.error(error);
          toast.error("please give currect information")
        })
    }
    return (
        <div className="my-[60px]">
            <div className=" bg-base-200">

            <p className="font-bold pt-[20px] text-5xl text-center text-[#FF497C]">Please Login</p>
  <div className="mx-[30px] lg:w-1/2 lg:mx-[290px] py-[30px] ">
   
    <div className=" shadow-2xl ">
    
    
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
          <button className="btn bg-[#FF497c]">Login</button>
        </div>
      </form>

      <div className="pb-[30px]">
  <div className="form-control mx-[30px] mt-6">
          <button  onClick={()=>googleLogin()}
          className="btn bg-[#FF497c]">Google-login</button>
        </div>

        <div className="form-control mx-[30px] mt-6">
          <button onClick={()=>  githubLogin()} 
         
          className="btn bg-[#FF497C]">GitHub login</button>
        </div>

        <div className="mx-[40px] pb-[40px]">

<p>Do you have an account??? plz</p>

<Link to='/register'><button className="text-2xl font-bold text-blue-600">Registation</button></Link>
</div>
  </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;