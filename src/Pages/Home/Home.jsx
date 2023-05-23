
import useTitle from "../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ClientReview from "../ClientReview/ClientReview";
import Gallary from "../Gallary/Gallary";
import Payment from "../Payment/Payment";

const Home = () => {
    useTitle('Home')

    return (

        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Categories></Categories>
            <ClientReview></ClientReview>
            <Payment></Payment>
        </div>
    );
};

export default Home;