import { Link, useLoaderData } from "react-router-dom";



const AllArt = () => {
    const crafts = useLoaderData();

    return (
    
     
         <div className="mx-[100px] my-[70px] ">
            

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="font-bold text-2xl">Name</th>
        <th className="font-bold text-2xl">descripton</th>
        <th className="font-bold text-2xl">price</th>
      </tr>
    </thead>
   


        {
            crafts.map((craft, index)=>
            
            <tbody key={craft._id}>
                      <tr className="bg-base-200">
        <th>{index+1}</th>
        <td>{craft.item}</td>
        <td>{craft.description}</td>
        <td>{craft.price}</td>
        <td>
            
            <Link to={`/craft/${craft._id}`}><button className="btn bg-[#FF497C] text-white font-bold">View Details</button></Link>
        
        </td>
      </tr>

            </tbody>
            
            
            )
        }
      
      {/* <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
    
    
  </table>
</div>


        </div>
    );
};

export default AllArt;