import Image from "next/image";

const Welcome = () => {
    return (
        <div>
            <div className="flex text-black justify-between">
                <div>
                    <Image
                        src="/background-element2.svg"
                        alt="semi-circle"
                        width={150}
                        height={150}
                        className="relative"
                    />
                    <Image
                        src="/arrows.svg"
                        alt="arrows"
                        width={40}
                        height={40}
                        className="absolute top-48 left-4"
                    />
                    <Image
                        src="/semi-rect.svg"
                        alt="semi-rect"
                        width={150}
                        height={150}
                        className="absolute top-40 left-60 mb-20"
                    />
                    <h2 className="text-md font-bold ml-24 mt-14 mb-4">DIGITAL MARKETING AGENCY</h2>
                    <h1 className="text-5xl ml-24 font-bold mb-2">We Build Your Digital <br></br>Campaign Performance</h1>
                    <p className="ml-24 mb-4">Creating impactful marketing strategies for new business horizons.</p>
                    <Image
                        src="/mountain.svg"
                        alt="mountain"
                        width={350}
                        height={150}
                        className="ml-24"
                    /></div>
                {/* Adding the home.png image */}
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
            <div className="flex items-center justify-center mt-20" ><Image
                src="/down-arrow 2.svg"
                alt="semi-rect"
                width={70}
                height={150}

            />
            </div>
            <div className="mt-40 px-4">
                <h1 className="text-black text-3xl text-center font-bold mb-10">Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-2xl p-8">
                        <Image src="/research 1.svg" alt="research" height={100} width={80} className="mt-10 mb-8" />
                        <h1 className="text-xl font-bold text-center mb-4">User & Audience Insights Analysis</h1>
                        <p className="text-center">Data-rich audience insight reports, segmenting of audience based on their online habits, interests, and keywords.</p>
                    </div>
                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-2xl p-8">
                        <Image
                            src="/seo 1.svg" height={50} width={80} alt="content" className="mt-10 mb-8" />
                        <h1 className="text-xl font-bold text-center mb-4">Performance Marketing Campaigns</h1>
                        <p className="text-center">Real-time ROI measurements optimizing KPIs such as customer turnover rate and percentage of sales from new clients.</p>
                    </div>
                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-2xl p-8">
                        <Image
                            src="/content 1.svg" height={50} width={80} alt="content" className="mt-10" />
                        <h1 className="text-xl font-bold text-center mb-4">Keyword Targeting</h1>
                        <p className="text-center">Contextual targeting with a selection of highly used keywords and topics showing your ads only on relevant platforms.</p>
                    </div>
                </div>
                <div className="mt-40">
                    <Image
                        src="/semi-circle.svg"
                        alt="semi-circle"
                        width={150}
                        height={150}
                        className="absolute left-0 mb-20"
                    />
                    <Image
                        src="/circle-rect.svg"
                        alt="semi-circle"
                        width={250}
                        height={150}
                        className="relative left-[405px] top-10"
                    />
                    
                    <h1 className="text-5xl text-black font-bold text-center ">The Installa Approach</h1>
                    <div className="flex justify-evenly">
                        <div>
                            <Image
                                src="/installa_section3 1.png"
                                alt="mountain"
                                width={550}
                                height={150}
                                className="ml-24"
                            />
                        </div>
                        <div className="text-black"><h2>Creating Business Growth</h2>
                        <p>At Installa we offer you a results-driven approach to effectively reach your audience, while ensuring your brand’s relevancy on all social platforms through our strategic contextual targeting concepts. In addition, we optimize key KPIs like customer turnover rate and sales percentage of new clients, with the means to enable well-informed business decisions regarding the overall direction of your business’ current, as well as future projects.</p>
                    </div>
                        
                        </div>
                    <Image
                        src="/mountain.svg"
                        alt="mountain"
                        width={350}
                        height={150}
                        className="ml-24"
                    />
                    <button className="text-sm text-[#FE4E5A] font-semibold border-2 border-[#FE4E5A] px-4 py-1 rounded-2xl hover:bg-[#FE4E5A] hover:text-white"
                    >
                    Get Started Now
                    </button>
                    </div>
            </div>
        </div>
    );
};

export default Welcome;