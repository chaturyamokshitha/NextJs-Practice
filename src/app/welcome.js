"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav"
const Welcome = () => {
    return (
        <div>

            <div className="grid md:grid-cols-2 grid-cols-1">
                <div>
                    <Image
                        src="/background-element2.svg"
                        alt="semi-circle"
                        width={150}
                        height={150}
                        className="relative w-[100px] md:w-[150px]"
                    />
                    <Image
                        src="/arrows.svg"
                        alt="arrows"
                        width={40}
                        height={40}
                        className="absolute top-40 md:top-48 left-4 w-[20px] md:w-[40px]"
                    />
                    <Image
                        src="/semi-rect.svg"
                        alt="semi-rect"
                        width={150}
                        height={150}
                        className="absolute top-20 md:top-40 left-30 md:left-60 mb-20"
                    />
                    <div className="ml-10">
                        <h2 className="text-sm md:text-md font-bold ml-0 md:ml-24 mt-14 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            DIGITAL MARKETING AGENCY
                        </h2>
                        <h1 className="text-xl md:text-5xl ml-0 md:ml-24 font-bold mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            We Build Your Digital <br /> Campaign Performance
                        </h1>
                        <p className=" ml-0 md:ml-24 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Creating impactful marketing strategies for new business horizons.
                        </p>
                        <Image
                            src="/mountain.svg"
                            alt="mountain"
                            width={350}
                            height={150}
                            className="md:ml-24 w-[180px]"
                        />
                    </div>

                </div>
                <div>
                    <Image
                        src="/home.png"
                        alt="home"
                        width={580}
                        height={500}
                        className="mr-18 mt-10"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mt-20">
                <button onClick={() => {
                    document.getElementById("4")?.scrollIntoView({ behavior: "smooth" });
                }}> <Image
                        src="/down-arrow 2.svg"
                        alt="down-arrow"
                        width={70}
                        height={150}
                    /></button>
            </div>

            <div className="mt-40 md:px-24  px-4 " id="4">
                <h1 className="text-black text-4xl text-center font-bold mb-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>Services</h1>


                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-10 ">
                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-8">
                        <Image
                            src="/research 1.svg"
                            alt="research"
                            height={100}
                            width={80}
                            className="md:mt-10 mb-8"
                        />
                        <h1 className="md:text-2xl text-xl font-bold text-center mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            User & Audience Insights Analysis
                        </h1>
                        <p className="md:p-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Data-rich audience insight reports, segmenting of audience based on their online habits, interests, and keywords.
                        </p>
                    </div>
                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-8">
                        <Image
                            src="/seo 1.svg"
                            height={50}
                            width={80}
                            alt="seo"
                            className="md:mt-10 mb-8"
                        />
                        <h1 className="text-xl md:text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Performance Marketing Campaigns
                        </h1>
                        <p className="md:p-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Real-time ROI measurements optimizing KPIs such as customer turnover rate and percentage of sales from new clients.
                        </p>
                    </div>
                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-8">
                        <Image
                            src="/content 1.svg"
                            height={50}
                            width={80}
                            alt="content"
                            className="md:mt-10 mb-8"
                        />
                        <h1 className="md:text-2xl text-xl font-bold text-center mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Keyword Targeting
                        </h1>
                        <p className="p-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Contextual targeting with a selection of highly used keywords and topics showing your ads only on relevant platforms.
                        </p>
                    </div>
                </div>

                <Image
                    src="/background-element29.svg"
                    alt="semi-circle"
                    width={180}
                    height={150}
                    className="absolute right-0 bottom-[-650px] "
                />
                <Image
                    src="/arrows.svg"
                    alt="arrows"
                    width={50}
                    height={40}
                    className="absolute right-[30px] bottom-[-830px]"
                />

            </div>

            <div className="mt-40 px-4">
                <Image
                    src="/semi-circle.svg"
                    alt="semi-circle"
                    width={180}
                    height={150}
                    className="absolute left-0 mt-10 mb-20 w-[150px] hidden md:block"
                />
                <Image
                    src="/circle-rect.svg"
                    alt="circle-rect"
                    width={250}
                    height={150}
                    className="relative  left-[0px] md:left-[405px] top-10"
                />

                <h1 className="text-5xl text-black font-bold text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    The Installa Approach
                </h1>
                <div className="grid md:grid-cols-2 grid-cols-1 md:mt-40 md:gap-20">
                    <div className="flex justify-between items-center mt-10">
                        <Image
                            src="/installa_section3 1.png"
                            alt="installa-section"
                            width={750}
                            height={150}
                            className="md:ml-2"
                        />
                    </div>
                    <div className="text-black  mt-14 ml-4 md:ml-28">
                        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>Creating Business Growth</h2>
                        <p className="mb-4 text-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            At Installa we offer you a results-driven approach to effectively reach your audience, while ensuring your brand’s relevancy on all social platforms through our strategic contextual targeting concepts. In addition, we optimize key KPIs like customer turnover rate and sales percentage of new clients, with the means to enable well-informed business decisions regarding the overall direction of your business’ current, as well as future projects.
                        </p>
                        <div className="flex flex-col justify-end items-end"><Image
                            src="/mountain.svg"
                            alt="mountain"
                            width={400}
                            height={150}
                            className="mb-4"
                        /></div>
                        <div className="flex flex-col justify-end items-end"><button className="text-md text-[#FE4E5A] font-semibold border-2 border-[#FE4E5A] md:px-11 px-4 py-1 rounded-2xl md:ml-80 hover:bg-[#FE4E5A] hover:text-white">
                            Get Started Now
                        </button></div>
                    </div>
                </div>
            </div>
            <div className="mt-40 text-black animate-fadeIn">
                <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>The Installa Solutions</h1>

                <Image
                    src="/semi-rect.svg"
                    alt="Decorative shape"
                    width={180}
                    height={150}
                    className="relative  left-20 md:left-56 top-10"
                />

                <div className="flex flex-col lg:flex-row items-start mt-20 px-6 lg:px-20">
                    {/* Text Section */}
                    <div className="text-md max-w-2xl mb-10 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>Tailor-Made Marketing Strategies</h2>
                        <p className="mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            As a business-focused consultancy agency, our aspiration is to provide professional advisory services to its clients through specialized tailor-made solutions. We aim to offer you individually crafted marketing campaigns and audience insights analysis, equipping you with data-rich reports and real-time ROI measurements.
                        </p>
                        <p className="mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            With our work, we strive to provide you with business expansion opportunities, an increase of brand recognition, and higher customer purchase rates. Moreover, our vast experience in the field enables a more personalized, flexible approach when it comes to the strategic business planning and marketing strategy set up of our client’s companies.
                        </p>

                        <Image
                            src="/mountain.svg"
                            alt="Decorative mountain graphic"
                            width={400}
                            height={150}
                            className="mb-6"
                        />

                        <button className="text-md text-[#FE4E5A] font-semibold border-1 border-[#FE4E5A] px-11 py-2 rounded-4xl hover:bg-[#FE4E5A] hover:text-white transition-all duration-300">
                            More About Us
                        </button>
                    </div>

                    {/* Illustration Section */}
                    <div className="lg:ml-10">
                        <Image
                            src="/installa_section4 1.png"
                            alt="Illustration showing marketing dashboard and user interaction"
                            width={700}
                            height={150}
                            className="mx-auto"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button onClick={() => {
                        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                    }}>
                        <Image
                            src="/down-arrow 2.svg"
                            alt="down-arrow"
                            width={70}
                            height={150}
                        />
                    </button>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-20 ml-8 mr-8 md:ml-20 md:mr-20 mt-20">
                <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-10  w-[590px] max-w-full">
                    <Image
                        src="/concept 1.svg"
                        height={50}
                        width={80}
                        alt="seo"
                        className="mb-4"
                    />
                    <h1 className="text-2xl text-center font-bold mb-2 " style={{ fontFamily: 'Open Sans, sans-serif' }}>Clear Concepts</h1>
                    <p className="text-md md:px-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>In terms of our strategic business planning, we possess a clear view on how to structure our marketing campaigns, as we heavily rely on in-depth research and analysis.</p>
                </div>
                <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-10 w-[590px] max-w-full">
                    <Image
                        src="/creativity 1.svg"
                        height={50}
                        width={80}
                        alt="seo"
                        className="mb-4"
                    />
                    <h1 className="text-2xl text-center font-bold mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>Innovative Technology</h1>
                    <p className="text-md md:px-10 " style={{ fontFamily: 'Open Sans, sans-serif' }}>We utilize a unique approach when it comes to keyword research, grouping, as well as discovery. We conduct keyword analysis, considering the intent of searchers and use that to your advantage.</p>
                </div>
                <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-10 w-[590px] max-w-full">
                    <Image
                        src="/m.svg"
                        height={50}
                        width={80}
                        alt="seo"
                        className="mb-4"
                    />
                    <h1 className="text-2xl text-center font-bold mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>In-depth Analysis</h1>
                    <p className="text-md md:px-10 " style={{ fontFamily: 'Open Sans, sans-serif' }}>We perform extensive research in order to improve or adjust targeting techniques, making sure we translate those efforts throughout all advertising platforms your business makes use of.</p>
                </div>
                <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-10 w-[590px] max-w-full">
                    <Image
                        src="/management 1.svg"
                        height={50}
                        width={80}
                        alt="seo"
                        className="mb-4"
                    />
                    <h1 className="text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>Performance Enhancement</h1>
                    <p className="text-md md:px-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>We help you breakdown your campaign initiatives and narrow down your targeting towards the people who actively clicking on your ads – we provide filtering by gender, age, placement, and device.</p>
                </div>
            </div>
            <div className="mt-20 text-black">
                <Image
                    src="/circle-rect.svg"
                    alt="circle-rect"
                    width={250}
                    height={150}
                    className="relative left-[30px] md:left-[360px] top-10"
                />
                <h1 className="text-center text-[20px] md:text-4xl font-bold">
                    Get Your Campaign Performance on<br />Another Level!
                </h1>
                <h2 className="text-center p-4">Further develop your successful online presence and scale up your business.</h2>
                <div className="flex justify-center mt-4">
                    <Link href="/contact">
                        <button className="text-md text-[#FE4E5A] font-semibold border-1 border-[#FE4E5A] px-11 py-2 rounded-4xl hover:bg-[#FE4E5A] hover:text-white transition-all duration-300">
                            Get In Touch
                        </button>
                    </Link>
                </div>
                <div className="lg:ml-10">
                    <Image
                        src="/last1.png"
                        alt="Illustration showing marketing dashboard and user interaction"
                        width={700}
                        height={150}
                        className="mx-auto p-10"
                    />
                </div>
                <Image
                    src="/background-element29.svg"
                    alt="semi-circle"
                    width={180}
                    height={150}
                    className="absolute right-0 bottom-[-650px] "
                />
                <Image
                    src="/arrows.svg"
                    alt="arrows"
                    width={50}
                    height={40}
                    className="absolute right-[30px] bottom-[-830px]"
                />
            </div>
        </div>
    );
};

export default Welcome;
