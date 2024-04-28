import { FaCodePullRequest } from "react-icons/fa6";

const ChooseUs = () => {
    return (
        <div className="bg-red-100">
            <h1 className="text-center font-bold text-5xl pt-[16px] mb-[30px]">User Feedback</h1>
            <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] lg:mx-[200px]">
                    <div className="">
                    <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
  <div className="card-body ">
      <h1 className="text-3xl"><FaCodePullRequest /></h1>
   
    <p className="font-bold ">I purchase a painting.It was outstanding and most beautifull painting I had ever seen. Thanks a lot for such a beautiful painting.. </p>
    <div className="card-actions justify-start">
    <div className="flex gap-[10px]">
    <div className="w-10 rounded-full">
          <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <div>
            <h1 className="font-bold">Israt</h1>
            <p>Customer</p>
        </div>
    </div>
    </div>
  </div>
</div>
                    </div>


                    <div>
                    <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
  <div className="card-body">

  <h1 className="text-3xl"><FaCodePullRequest /></h1>
    
    <p className="font-bold">Some days ego,, I purchases a painting from here.. It was so beautiful and outsanding. and packaging system is too good.. And I love this painting too much.. thank you much for such a beautiful painting</p>
    <div className="card-actions justify-start">
      <div className="flex gap-[10px]">
      <div className="w-10 rounded-full">
          <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <div>
            <h1 className="font-bold">Zayan</h1>
            <p>Customer</p>
        </div>
      </div>
    </div>
  </div>
</div>
                    </div>

            </div>

        </div>
    );
};

export default ChooseUs;