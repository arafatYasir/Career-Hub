const Footer = () => {
    return (
        <footer className="footer px-0 py-[130px] block bg-[#1A1919] text-base-content p-10 mt-[130px]">
            <div className="px-6 xl:max-w-7xl md:px-0 mx-auto flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
                <aside>
                    <div>
                        <img src="images/logo2.webp" alt="" />
                    </div>
                    <p className="mt-5 text-[16px] leading-7 text-white max-w-[287px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                    <div className="flex gap-4 mt-5">
                        <div>
                            <a href="https://www.facebook.com/" target="_blank"><img src="images/fb_icon.webp" alt="Facebook icon" /></a>
                        </div>
                        <div>
                            <a href="https://www.x.com/" target="_blank"><img src="images/twitter_icon.webp" alt="Facebook icon" /></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/" target="_blank"><img src="images/insta_icon.webp" alt="Facebook icon" /></a>
                        </div>
                    </div>
                </aside>

                <nav className="text-white flex flex-col gap-3">
                    <h6 className="text-xl font-semibold">Company</h6>
                    <a className="link link-hover text-[16px] text-gray-400">About Us</a>
                    <a className="link link-hover text-[16px] text-gray-400">Work</a>
                    <a className="link link-hover text-[16px] text-gray-400">Latest News</a>
                    <a className="link link-hover text-[16px] text-gray-400">Careers</a>
                </nav>

                <nav className="text-white flex flex-col gap-3">
                    <h6 className="text-xl font-semibold">Product</h6>
                    <a className="link link-hover text-[16px] text-gray-400">Prototype</a>
                    <a className="link link-hover text-[16px] text-gray-400">Plans & Pricing</a>
                    <a className="link link-hover text-[16px] text-gray-400">Customers</a>
                    <a className="link link-hover text-[16px] text-gray-400">Integrations</a>
                </nav>

                <nav className="text-white flex flex-col gap-3">
                    <h6 className="text-xl font-semibold">Support</h6>
                    <a className="link link-hover text-[16px] text-gray-400">Help Desk</a>
                    <a className="link link-hover text-[16px] text-gray-400">Sales</a>
                    <a className="link link-hover text-[16px] text-gray-400">Become a Partner</a>
                    <a className="link link-hover text-[16px] text-gray-400">Developers</a>
                </nav>

                <nav className="text-white flex flex-col gap-3">
                    <h6 className="text-xl font-semibold">Contact</h6>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </nav>
            </div>

            <div className="h-[1.5px] w-full bg-linear-to-r from-[#7E90FE33] to-[#9873FF33] px-6 md:px-0 xl:max-w-7xl mx-auto my-12"></div>

            <div className="px-6 xl:max-w-7xl mx-auto md:px-0 flex justify-between">
                <p className="text-sm leading-6 text-gray-300">@2025 <a href="#" className="font-semibold">CareerHub</a>. All Rights Reserved</p>
                <p className="text-sm leading-6 text-gray-300">Powered by <a href="#" className="font-semibold">CareerHub</a></p>
            </div>
        </footer>
    );
};

export default Footer;