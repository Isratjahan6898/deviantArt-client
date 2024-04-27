import AskQuestion from "../AskQuestion/AskQuestion";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ChooseUs></ChooseUs>
           <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;