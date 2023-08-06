
import useTitle from "../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ClientReview from "../ClientReview/ClientReview";
import Gallary from "../Gallary/Gallary";
import KidBlogs from "../KidBlogs/KidBlogs";
import Payment from "../Payment/Payment";

const Home = () => {
    useTitle('Home')

    return (

        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Categories></Categories>
            <Payment></Payment>
            <ClientReview></ClientReview>
            <KidBlogs></KidBlogs>
        </div>
    );
};

export default Home;