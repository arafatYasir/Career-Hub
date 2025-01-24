const Banner = () => {
    return (
        <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
            <div>
                <h1 className="max-w-[587px] text-[#1A1919] text-[80px] leading-25 font-bold ">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>

                <p className="mt-6 max-w-[513px] text-[#757575] text-lg font-medium">
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <button className="text-white text-xl font-bold bg-linear-to-r from-[#7E90FE] to-[#9873FF] py-[19px] px-[28px] rounded-lg cursor-pointer mt-8">Get Started</button>
            </div>
            <div className="max-w-[600px]">
                <img className="w-full" src="images/banner_image.webp" alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;