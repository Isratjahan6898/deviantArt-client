import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import ShowmyCard from "../ShowmyCard/ShowmyCard";



const MyArt = () => {

    const{user}= useContext(AuthContex) ||{};
    const[crafts, setCrafts] = useState([]);

    useEffect(()=>{

        fetch(`http://localhost:5000/craft/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setCrafts(data);
        })
    },[user])
    console.log(user)
    return (
        <div className="mx-[30px] md:mx-[70px] my-[60px] lg:mx-[100px]">
           

           <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:grid-cols-3">
           {
            crafts.map(craft=><ShowmyCard key={craft._id} craft={craft}></ShowmyCard>)
           }
           </div>
        </div>
    );
};

export default MyArt;