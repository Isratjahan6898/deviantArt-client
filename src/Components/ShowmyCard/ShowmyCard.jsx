import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

const ShowmyCard = ({craft}) => {

    const{_id,image,item,subcategory,price,
        rating, customization, time, stock, email, name, description}= craft;
    console.log(craft)
    return (
        <div>
            <div className="card h-[750px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" className="w-[300px] h-[200px]" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item}
      
    </h2>
    <h1 className="font-bold">{subcategory}</h1>

    <hr className="border-2 my-[10px] " />
    <p>{description}</p>
    <hr className="border-2 my-[10px]" />

    <div className="flex  justify-end">
    <p className="flex"><CiStar className="text-2xl text-yellow-600" />{rating}</p>
    <p className="flex"><MdAttachMoney className="text-2xl" />{price}</p>
    </div>

    <hr className="border-2 my-[10px]" />

    <div className="flex gap-[20px]">

        <h1><span className="font-bold text-1xl">Customization:</span>{customization}</h1>
        <p><span className="font-bold text-1xl">Time:</span>{time}</p>
    </div>

    <hr className="border-2 my-[10px]" />

    <h1><span className="font-bold">Stock:</span>{stock}</h1>
    <p><span className="font-bold mb-[20px]">Email:</span>{email}</p>


    <div className="card-actions mt-[20px] justify-end">
      <btn className="btn bg-[#FF497C] text-white font-bold">Update</btn> 
      <btn className="btn bg-[#FF497C] text-white font-bold">delete</btn>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowmyCard;