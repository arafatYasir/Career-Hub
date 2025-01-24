const JobCategories = () => {
    return (
        <div className="mt-[130px]">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1919] text-center">Job Category List</h2>
            <p className="text-[15px] md:text-lg text-[#757575] leading-7 text-center mt-4 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="flex flex-col justify-between items-center md:flex-row mt-8 gap-6 md:gap-0">
                <div className="w-[300px] box-border py-10 bg-slate-300 rounded-lg">
                    <div className="max-w-10 mx-auto">
                        <img className="w-full" src="images/finance.webp" alt="" />
                    </div>

                    <h4 className="text-xl text-center text-[#474747] font-bold mt-8">Account & Finance</h4>

                    <p className="text-lg text-center text-[#A3A3A3] leading-7 font-medium mt-2">300 Jobs Available</p>
                </div>

                <div className="w-[300px] box-border py-10 bg-slate-300 rounded-lg">
                    <div className="max-w-10 mx-auto">
                        <img className="w-full" src="images/finance.webp" alt="" />
                    </div>

                    <h4 className="text-xl text-center text-[#474747] font-bold mt-8">Creative Design</h4>

                    <p className="text-lg text-center text-[#A3A3A3] leading-7 font-medium mt-2">100+ Jobs Available</p>
                </div>

                <div className="w-[300px] box-border py-10 bg-slate-300 rounded-lg">
                    <div className="max-w-10 mx-auto">
                        <img className="w-full" src="images/finance.webp" alt="" />
                    </div>

                    <h4 className="text-xl text-center text-[#474747] font-bold mt-8">Marketing & Sales</h4>

                    <p className="text-lg text-center text-[#A3A3A3] leading-7 font-medium mt-2">150 Jobs Available</p>
                </div>

                <div className="w-[300px] box-border py-10 bg-slate-300 rounded-lg">
                    <div className="max-w-10 mx-auto">
                        <img className="w-full" src="images/finance.webp" alt="" />
                    </div>

                    <h4 className="text-xl text-center text-[#474747] font-bold mt-8">Engineering Job</h4>

                    <p className="text-lg text-center text-[#A3A3A3] leading-7 font-medium mt-2">224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategories;