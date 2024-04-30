import { useLoaderData } from "react-router-dom";
import AskQuestion from "../AskQuestion/AskQuestion";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import HomeCard from "../HomeCard/HomeCard";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    const crafts = useLoaderData();
    const sliceCrafts = crafts.slice(0,6)
    return (
        <div>
           <Banner></Banner>

             <div className="my-[70px] mx-[20px] md:mx-[70px] lg:mx-[100px]">

                <Fade direction={'up'}>
                <h1 className="text-5xl font-bold text-center mb-[20px] text-red-400">Show Craft Item</h1>
                </Fade>
                <p className="font-bold text-center">Art is one of the ways by which a person can convey his or her feelings and emotions. It is a field where there are many talented people arising.From ancient times, people have been conveying their messages in the form of art, whether it is a cave painting or something which today is called digital art</p>
                <p></p>
                <p></p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-[20px]">
                      {
                        sliceCrafts.map(craft=> <HomeCard key={craft._id} craft={craft}></HomeCard>)
                      }
                      </div>
                
                </div>
           <ChooseUs></ChooseUs>
           <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;