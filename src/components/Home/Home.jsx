import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <JobCategories />
            <FeaturedJobs />
        </div>
    );
};

export default Home;