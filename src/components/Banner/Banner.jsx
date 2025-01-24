const Banner = () => {
    return (
        <div className="mt-10 flex flex-col items-center justify-between md:flex-row gap-10 md:gap-0">
            <div>
                <h1 className="max-w-[587px] text-[#1A1919] text-4xl md:text-[80px] text-center md:text-left md:leading-25 font-bold ">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>

                <p className="mt-6 max-w-[513px] text-[#757575] md:text-lg font-medium text-center md:text-left text-[15px]">
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <div className="text-center md:text-left">
                    <button className="text-white text-xl font-bold bg-linear-to-r from-[#7E90FE] to-[#9873FF] py-1.5 px-2 md:py-[19px] md:px-[28px] rounded-lg cursor-pointer mt-8">Get Started</button>
                </div>
            </div>
            <div className="max-w-[600px]">
                <img className="w-full" src="images/banner_image.webp" alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;