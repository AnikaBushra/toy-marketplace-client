
import useTitle from "../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallary from "../Gallary/Gallary";

const Home = () => {
    useTitle('Home')

    return (

        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Categories></Categories>
        </div>
    );
};

export default Home;