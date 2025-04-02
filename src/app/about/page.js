import Image from "next/image";

const About = () => {
    return (
        <div className="bg-white text-black">
            <Image
                src="/background-element2.svg"
                alt="semi-circle"
                width={150}
                height={150}
                className="absolute z-0"
            />
            <Image
                src="/arrows.svg"
                alt="arrows"
                width={40}
                height={40}
                className="absolute top-48 left-4"
            />

            <h1 className="text-center text-4xl mb-2 font-bold pt-10">
                Welcome to Installa
            </h1>
            <h2 className="text-center">
                Home to Effective Marketing Strategies Based on Innovative, In-Depth Analysis.
            </h2>

            <div className="grid grid-cols-2 mt-10">
                <div>
                    <Image
                        src="/Frame.png"
                        alt="semi-circle"
                        width={600}
                        height={150}
                        className="ml-40"
                    />
                </div>
                <div className="mt-10 ml-30">
                    <Image
                        src="/semi-rect.svg"
                        alt="semi-rect"
                        width={130}
                        height={150}
                        className="absolute top-28 left-[1050px] mb-20"
                    />
                    <h1 className="text-md font-bold mb-4">
                        Our Clear Concepts and Innovative Technology
                    </h1>
                    <p className="pr-20">
                        Our professional business philosophy is based on the understanding that
                        substantial growth opportunities come from strategic, well-researched digital
                        campaign initiatives.
                        <br />
                        <br />
                        Therefore, with the means of our clear concepts and innovative technology,
                        we aim to offer our clients with business expansion opportunities, along with
                        a significant increase of brand recognition, and higher customer purchase rates.
                    </p>
                    <Image
                        src="/mountain.svg"
                        alt="mountain"
                        width={350}
                        height={150}
                        className="mt-4 ml-40"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mt-10">
                <Image
                    src="/down-arrow 2.svg"
                    alt="down-arrow"
                    width={70}
                    height={150}
                />
            </div>

            <div className="mt-40 grid grid-cols-2 gap-0 ml-20">
                 <Image
                                    src="/background-element29.svg"
                                    alt="semi-circle"
                                    width={180}
                                    height={150}
                                    className="absolute right-0 bottom-[-400px] "
                                />
                                <Image
                                    src="/arrows.svg"
                                    alt="arrows"
                                    width={50}
                                    height={40}
                                    className="absolute right-[30px] bottom-[-590px]"
                                />
                <div className="m-10">
                    <h2 className="text-xl mb-4 font-bold mt-10"> We Are Passionate About Advancing Your Online Impact</h2>
                    <p className="pr-10">
                        Our extensive experience in the digital marketing scene allows us to present opportunities for a more personalized, tailor-made approach when it comes to the strategic business planning and marketing strategy set up of our client’s companies.
                        <br /><br />
                        In addition, being a business-oriented consultancy agency, our mission as a company consists of providing professional advisory services through specialized individualized solutions.
                    </p>
                    <Image
                        src="/mountain.svg"
                        alt="mountain"
                        width={350}
                        height={150}
                        className="mt-4 ml-4"
                    />
                </div>
                <div><Image
                    src="/about2.png"
                    alt="semi-circle"
                    width={900}
                    height={150}
                    className="ml-0 pr-20 "
                /></div>
            </div>



            <div className="grid grid-cols-2 gap-20 mt-10">
                <div><Image
                    src="/about1.png"
                    alt="semi-circle"
                    width={500}
                    height={150}
                    className="ml-20 "
                /></div>
                <div className="mt-28">
                    <h1 className="text-xl font-bold mb-2">
                        We Design Your Success
                    </h1>
                    <p className="pr-36 mb-4">Installa’s creative team strives to offer you carefully built marketing campaigns and audience insights analysis, equipping businesses with data-rich reports and real-time ROI measurements.
<br></br><br></br>
                        At Installa we offer you a results-driven approach on how to effectively reach your audience, while ensuring your brand’s relevancy on all social platforms through contextual targeting.
<br></br><br></br>
                        Moreover, we optimize KPIs like customer turnover rate and sales percentage of new clients in order to enable well-informed business decisions about the direction of your current projects.</p>
                    <p className="text-xl font-bold pr-10 mb-4">Installa Marketing is your One-Stop-Solution for Campaign Performance Enhancement and Keyword Targeting Initiatives.</p>
                    <button className="text-md text-[#FE4E5A] font-semibold border-2 border-[#FE4E5A] px-11 py-1 rounded-2xl ml-[400px] hover:bg-[#FE4E5A] hover:text-white">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
