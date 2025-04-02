import Image from "next/image";
const Services = () => {
    return ( 
        <div className="bg-white text-black ">
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
            <h1 className="text-center text-5xl font-bold pt-10 mb-4">Our Services</h1>
            <h2 className="text-center text-[17px] mb-6">We are an extension of your team</h2>
            <div className="flex flex-col justify-center items-center ">
                <Image
                    src="/Frame (1).png"
                    alt="semi-circle"
                    width={900}
                    height={150}
                    className=""
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-10 mt-20">
                <div className="">
                    <Image
                        src="/services2.png"
                        alt="semi-circle"
                        width={650}
                        height={150}
                      className="ml-10 mb-10"
                    />
                </div>
                <div className="mt-40">
                    <h1 className="text-2xl font-bold mb-4">Campaign Performance and Audience Analysis</h1>
                    <p className="pr-20 text-[18px]">
                      As part of our strategic arsenal, we provide businesses with access to personalized, data-rich reports on their audience&#39;s online habits, interests, geographical location, gender, and device.
                      <br /><br />
                      By optimizing their current initiatives, our clients would gain access to real-time ROI measurements, a significant improvement of key KPIs such as: customer turnover rate and percentage of sales from clients.
                    </p>
                <Image
                                            src="/mountain.svg"
                                            alt="Decorative mountain graphic"
                                            width={400}
                                            height={150}
                                            className="ml-56"
                                        />
                </div>
            </div>




            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-10 mt-20">
                <Image
                                    src="/semi-circle.svg"
                                    alt="semi-circle"
                                    width={180}
                                    height={150}
                                    className="absolute left-0 top-[1700px]"
                                />
                <div className="mt-44 ml-20">
                    <p className="text-2xl font-bold mb-2 pr-18">Build comprehensive, and purpose-driven campaigns for an impactful online presence.</p>
                    <p className="text-[18px] mb-4 pr-2"> In addition to the mentioned above strategic techniques, Installa’s team provides a unique approach to conducting keyword research and grouping, which allows for an improved advertising and targeting initiative across different social media channels.</p>
                    <Image
                        src="/mountain.svg"
                        alt="Decorative mountain graphic"
                        width={400}
                        height={150}
                        className="mb-4"
                    />
                    <button className="text-md text-[#FE4E5A] font-semibold border-1 border-[#FE4E5A] px-11 py-2 rounded-4xl hover:bg-[#FE4E5A] hover:text-white transition-all duration-300">
                        Get In Touch
                    </button>
                </div>
                <div>
                    <Image
                        src="/services1.png"
                        alt="semi-circle"
                        width={650}
                        height={150}
                        className="ml-10 mb-10"
                    />
                </div>
            </div>







            <div >
                <Image
                                    src="/circle-rect.svg"
                                    alt="circle-rect"
                                    width={230}
                                    height={150}
                                    className="relative left-[405px] top-10"
                                />
                <h1 className="text-4xl font-bold text-center">Bring Value to Your Business</h1>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-20 z-10 m-20 pb-20">
                                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-8">
                                        <Image
                                            src="/research 1.svg"
                                            alt="research"
                                            height={100}
                                            width={80}
                                            className="mt-10 mb-8"
                                        />
                                        <h1 className="text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            User & Audience Insights Analysis
                                        </h1>
                                        <p className="p-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            Data-rich audience insight reports, segmenting of audience based on their online habits, interests, and keywords.
                                        </p>
                                    </div>
                                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-8">
                                        <Image
                                            src="/seo 1.svg"
                                            height={50}
                                            width={80}
                                            alt="seo"
                                            className="mt-10 mb-8"
                                        />
                                        <h1 className="text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            Performance Marketing Campaigns
                                        </h1>
                                        <p className="p-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            Real-time ROI measurements optimizing KPIs such as customer turnover rate and percentage of sales from new clients.
                                        </p>
                                    </div>
                                    <div className="bg-[#F8CBCE] text-black flex items-center flex-col rounded-4xl p-8">
                                        <Image
                                            src="/content 1.svg"
                                            height={50}
                                            width={80}
                                            alt="content"
                                            className="mt-10 mb-8"
                                        />
                                        <h1 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
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
               <div className="text-center  bg-[#F8CBCE] p-10 ">
                    <h1 className="text-[40px] font-bold mb-10">Let's Work Together!</h1>
                    <button className="text-md text-[#FE4E5A] font-semibold bg-white border-1 border-[#FE4E5A] px-8 py-2 rounded-4xl hover:bg-[#FE4E5A] hover:text-white transition-all duration-300">
                     Contact Us
                    </button>
               </div>
            </div>
        </div>
     );
}
 
export default Services;