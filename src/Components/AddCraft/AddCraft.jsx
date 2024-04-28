

const AddCraft = () => {

    const handleAddProduct = (e)=>{
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

        console.log(craftItem)

        fetch('http://localhost:5000/craft',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(craftItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

      
    }
    return (
        <div className="my-[60px]">
      

            <div className="">
         <div className="bg-[#F4F3F0] mt-[100px] lg:mx-[150px] lg:h-[850px] lg:w-[900px]">


            <h1 className="text-center font-boldl lg:pt-[30px] lg:pb-[16px] text-4xl">Add Craft</h1>
           
            <form onSubmit={handleAddProduct}  className="">
                <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="photo" placeholder="CoffeeName" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>
            

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item_name</span>
          </label>
          <input type="text" name="item" placeholder="ChefName" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>


                </div>


                <div className="flex flex-col md:flex-row lg:flex-row  px-[30px] md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Subcategory_name</span>
          </label>
          <input type="text" name="subcategory" placeholder="Available Suplier" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>
            

        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" name="price" placeholder="text" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>


                </div>



           

                <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Category" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>
            

        <div className="form-control">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <input type="text" name="customization" placeholder="Show Details" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>


                </div>



                <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Processing_time</span>
          </label>
          <input type="text" name="time" placeholder="Category" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>
            

        <div className="form-control">
          <label className="label">
            <span className="label-text">StockStatus</span>
          </label>
          <input type="text" name="stock" placeholder="Show Details" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>


                </div>


                <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
                <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="text" name="email" placeholder="Category" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>
            

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name="name" placeholder="Show Details" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>


                </div>



                <div className="px-[30px] md:px-[60px] lg:px-[100px]">
          <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" name="descripton" placeholder="Show Details" className="input 
         md:w-[700px] w-[350px] p-[40px] input-bordered" required />
        </div>
          </div>


          <div className="px-[30px] md:px-[60px] lg:px-[100px]">
          <div className="form-control mt-6">
          <button className="btn md:w-[700px] w-[350px] bg-[#D2B48C]">Add </button>
        </div>
          </div>

            </form>
        </div>
       </div>
        </div>
    );
};

export default AddCraft;