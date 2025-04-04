"use client";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-white text-black">

            {/* ====== Decorative Background Elements (Top) ====== */}
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

            {/* ====== Hero Section ====== */}
            <h1 className="text-center text-4xl mb-2 font-bold pt-10">
                Welcome to Installa
            </h1>
            <h2 className="text-center">
                Home to Effective Marketing Strategies Based on Innovative, In-Depth Analysis.
            </h2>

            {/* ====== Section: Clear Concepts and Technology ====== */}
            <div className="grid md:grid-cols-2 mt-10 sm:grid-cols-1">
                <div className="flex justify-center items-center md:flex-none">
                    <Image
                        src="/Frame.png"
                        alt="semi-circle"
                        width={600}
                        height={150}
                        className="md:ml-40 m-4"
                    />
                </div>
                <div className=" m-4 md:mt-10 md:ml-30">
                    <Image
                        src="/semi-rect.svg"
                        alt="semi-rect"
                        width={130}
                        height={150}
                        className="absolute md:top-28 md:left-[1050px] md:mb-20 left-[340px] top-44 w-[70px] h-[100px] "
                    />
                    <h1 className="text-md font-bold mb-4">
                        Our Clear Concepts and Innovative Technology
                    </h1>
                    <p className="md:pr-20 sm:pr-0">
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
                        className="md:mt-4 md:ml-40 w-[300px] h-[100px] absolute left-22"
                    />
                </div>
            </div>

            {/* ====== Down Arrow Separator ====== */}
            <div className="flex items-center justify-center md:mt-10 mt-20 mb-10">
                <Image
                    src="/down-arrow 2.svg"
                    alt="down-arrow"
                    width={70}
                    height={150}
                />
            </div>

            {/* ====== Section: Online Impact and Advisory Services ====== */}
            <div className=" mt-40 md:mt-40 grid md:grid-cols-2 sm:grid-cols-1 gap-0 md:ml-20">
                {/* Decorative Background */}
                <Image
                    src="/background-element29.svg"
                    alt="semi-circle"
                    width={180}
                    height={150}
                    className="md:absolute right-0 md:bottom-[-400px] bottom-[-1200px] hidden"
                />
                <Image
                    src="/arrows.svg"
                    alt="arrows"
                    width={50}
                    height={40}
                    className="md:absolute right-[30px] md:bottom-[-590px] bottom-[-1350px] hidden "
                />

                <div className="mb:m-10 m-4">
                    <div>
                        <Image
                            src="/about2.png"
                            alt="semi-circle"
                            width={900}
                            height={150}
                            className=" pr-0 mb-4 md:hidden"
                        />
                    </div>
                    <h2 className="text-xl md:mb-4 font-bold md:mt-10 ">
                        We Are Passionate About Advancing Your Online Impact
                    </h2>
                    <p className="md:pr-10 ">
                        Our extensive experience in the digital marketing scene allows us to present opportunities
                        for a more personalized, tailor-made approach when it comes to the strategic business
                        planning and marketing strategy set up of our client’s companies.
                        <br />
                        <br />
                        In addition, being a business-oriented consultancy agency, our mission as a company
                        consists of providing professional advisory services through specialized individualized solutions.
                    </p>
                    <Image
                        src="/mountain.svg"
                        alt="mountain"
                        width={350}
                        height={150}
                        className="md:mt-4 md:ml-4 w-[300px] h-[100px] absolute left-22 "
                    />
                </div>

                <div>
                    <Image
                        src="/about2.png"
                        alt="semi-circle"
                        width={900}
                        height={150}
                        className="ml-0 md:pr-20 pr-0 mt-10 md:mt-0 hidden md:block"
                    />
                </div>
            </div>

            {/* ====== Section: Campaign Strategy and KPI Optimization ====== */}
            <div className="grid md:grid-cols-2 md:gap-20 md:mt-10 grid-cols-1 gap-0 mt-40">
                <div className="flex justify-center items-center md:flex-none">
                    <Image
                        src="/about1.png"
                        alt="semi-circle"
                        width={500}
                        height={150}
                        className="md:ml-20"
                    />
                </div>
                <div className="md:mt-28 ml-4 mt-14">
                    <h1 className="text-xl font-bold mb-2">
                        We Design Your Success
                    </h1>
                    <p className="md:pr-36 mb-4">
                        Installa’s creative team strives to offer you carefully built marketing campaigns
                        and audience insights analysis, equipping businesses with data-rich reports and real-time
                        ROI measurements.
                        <br />
                        <br />
                        At Installa we offer you a results-driven approach on how to effectively reach your audience,
                        while ensuring your brand’s relevancy on all social platforms through contextual targeting.
                        <br />
                        <br />
                        Moreover, we optimize KPIs like customer turnover rate and sales percentage of new clients
                        in order to enable well-informed business decisions about the direction of your current projects.
                    </p>
                    <p className="md:text-xl font-bold pr-10 mb-4 text-md">
                        Installa Marketing is your One-Stop-Solution for Campaign Performance Enhancement
                        and Keyword Targeting Initiatives.
                    </p>
                    <Link href='/contact'>
                        <button className="text-md text-[#FE4E5A] font-semibold border-2 border-[#FE4E5A] px-11 py-1 rounded-2xl md:ml-[400px] hover:bg-[#FE4E5A] hover:text-white">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
