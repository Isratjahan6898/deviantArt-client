import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    //const crafts= useLoaderData();
    const data = useParams();
    const [update,setUpdate]= useState({});
   

    useEffect(()=>{
      fetch(`http://localhost:5000/craft-by-id/${data.id}`)

      .then(res => res.json())
      .then(data => {
          setUpdate(data);
      })
    },[])
    console.log(update)
    
    console.log(data)

       

    const handleUpdate = e =>{
        e.preventDefault();
        const image = e.target.photo.value;
        const item = e.target.item.value;
        const subcategory = e.target.subcategory.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const time = e.target.time.value;
        const stock = e.target.stock.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        const description = e.target.descripton.value;
         const craftItem ={image,item,subcategory,price,
        rating, customization, time, stock, email, name, description};

        console.log(craftItem);

        fetch(`http://localhost:5000/craft/${update._id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(craftItem)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.modifiedCount > 0){
            Swal.fire({
              title: "Success!",
              text: "Your data is update.",
              icon: "success"
            });
          }
        })


       
    }
    return (
        <div>
            <div className="my-[60px]">
      

      <div className="">
   <div className="bg-[#F4F3F0] mt-[100px] lg:mx-[150px] lg:h-[850px] lg:w-[900px]">


      <h1 className="text-center font-boldl lg:pt-[30px] lg:pb-[16px] text-4xl">Update Craft</h1>
     
      <form onSubmit={handleUpdate}  className="">
          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Image</span>
    </label>
    <input type="text" name="photo" defaultValue={update.image} placeholder="photo url" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Item_name</span>
    </label>
    <input type="text" name="item" defaultValue={update.item} placeholder="item_name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>


          <div className="flex flex-col md:flex-row lg:flex-row  px-[30px] md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Subcategory_name</span>
    </label>
    <input type="text" name="subcategory" defaultValue={update.subcategory} placeholder="subcategory_name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">price</span>
    </label>
    <input type="text" name="price" defaultValue={update.price} placeholder="price" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>



     

          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Rating</span>
    </label>
    <input type="text" name="rating" defaultValue={update.rating} placeholder="rating" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Customization</span>
    </label>
    <input type="text" name="customization" defaultValue={update.customization} placeholder="customization" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>



          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Processing_time</span>
    </label>
    <input type="text" name="time" defaultValue={update.time} placeholder="processing_time" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">StockStatus</span>
    </label>
    <input type="text" name="stock" defaultValue={update.stock} placeholder="stockStatus" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>


          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">User Email</span>
    </label>
    <input type="text" name="email" defaultValue={update.email} placeholder="email" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">User Name</span>
    </label>
    <input type="text" name="name" defaultValue={update.name} placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>



          <div className="px-[30px] md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <label className="label">
      <span className="label-text">Short Description</span>
    </label>
    <input type="text" name="descripton" defaultValue={update.description} placeholder="Shor description" className="input 
   md:w-[700px] w-[350px] p-[40px] input-bordered" required />
  </div>
    </div>


    <div className="px-[30px] md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <button className="btn md:w-[700px] w-[350px] bg-[#D2B48C]">Update </button>
  </div>
    </div>

      </form>
  </div>
 </div>
  </div>
        </div>
    );
};

export default Update;