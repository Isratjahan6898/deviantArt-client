import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import ShowmyCard from "../ShowmyCard/ShowmyCard";
import Swal from "sweetalert2";




const MyArt = () => {

    const{user}= useContext(AuthContex) ||{};
    const[crafts, setCrafts] = useState([]);

    useEffect(()=>{

        fetch(`https://deviant-art-project-server.vercel.app/craft/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setCrafts(data);
        })
    },[user])

    const handleDelete = id =>{
        console.log(id)
  
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
  
            fetch(`https://deviant-art-project-server.vercel.app/${id}`,{
              method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
              console.log(data)
              if (data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                }
                // const remaining = crafts.filter(craft => craft._id !== id);
                // setMyToys(remaining);
            
            );
            const remaining = crafts.filter(craft => craft._id !== id);
            setCrafts(remaining);
            
              }
            })
           
         
          }
        });
  
      }


    console.log(user)
    return (
        <div className="mx-[30px] md:mx-[70px] my-[60px] lg:mx-[100px]">
           

           <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:grid-cols-3">
           {
            crafts.map(craft=><ShowmyCard key={craft._id}
                
                handleDelete={handleDelete}
                craft={craft}></ShowmyCard>)
           }
           </div>

          
        </div>
    );
};

export default MyArt;