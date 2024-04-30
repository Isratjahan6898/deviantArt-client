import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";


const CraftDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [products, setProducts]= useState({});

    useEffect(()=>{
        fetch(`https://deviant-art-project-server.vercel.app/craft-by-id/${id}`)
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data);
            setProducts(data);
        })
    },[id])
    return (
        <div className="mx-[30px] md:mx-[60px] lg:mx-[100px] my-[60px]">

<div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={products.image} className="lg:w-[450px] lg:h-[600px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{products.item}</h1>
      <h1 className="text-2xl font-bold">{products.subcategory}</h1>
      <p className="py-6">{products.description}.Painting is defined as the process of applying paint, or another medium, to a solid surface – usually a canvas. Paints or other forms of color are commonly applied to using a paintbrush. </p>


      <hr className="border-2 my-[10px]" />

<div className="flex  justify-between">
<p className="flex"><CiStar className="text-2xl text-yellow-600" />{products.time}</p>
<p className="flex"><MdAttachMoney className="text-2xl" />{products.price}</p>
</div>

<hr className="border-2 my-[10px]" />

<div className="flex justify-between">

    <h1><span className="font-bold text-1xl">Customization:</span>{products.customization}</h1>
    <p><span className="font-bold text-1xl">Time:</span>{products.time}</p>
</div>

<hr className="border-2 my-[10px]" />

<div>
    <h1><span className="font-bold text-1xl">Stocks:</span>{products.stock}</h1>
</div>

<hr className="border-2 my-[10px]" />


<div className="flex  justify-between mb-[10px]">

    <h1><span className="font-bold text-1xl">Email:</span>{products.email}</h1>
    <p><span className="font-bold text-1xl">User Name:</span>{products.name}</p>
</div>


      
    </div>
  </div>
</div>
           




        </div>
    );
};

export default CraftDetails;