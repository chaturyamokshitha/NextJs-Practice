import Image from "next/image";

const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-20">Contact Us</h1>
            <Image
                src="/semi-rect.svg"
                alt="semi-rect"
                width={140}
                height={150}
                className="absolute  w-[90px] md:w-[150px] top-30 md:top-44 left-[200px] md:left-[1000px]"
            />

            <Image
                src="/background-element2.svg"
                alt="semi-circle"
                width={150}
                height={150}
                className="absolute top-18"
            />
            <Image
                src="/arrows.svg"
                alt="arrows"
                width={40}
                height={40}
                className="absolute top-40 md:top-48 left-4 "
            />

            <div className="grid grid-cols-1 md:grid-cols-2 ml-4 md:ml-20 mt-16">
                <div>
                    <Image
                        src="/illustration.png"
                        alt="semi-rect"
                        width={550}
                        height={150}
                        className=""
                    />
                </div>
                <div className="md:mt-20 md:mr-20">
                    <h1 className="text-md font-bold m-4">
                        Ready to take the next step and work together? Let’s do it!
                    </h1>
                    <p className="m-4">
                        The digital marketing environment is highly dynamic and competitive. Gain a competitive edge and advance your online presence by making use of our strategic business planning, innovative technology, and in-depth analysis.
                        <br></br><br></br>
                        Do not hesitate to reach out to us by filling out the contact form below. Out Team will get in touch with you shortly, so we can further discuss your current and further business strategies.
                    </p>
                    <div className="flex justify-end items-end">
                        <Image
                            src="/mountain.svg"
                            alt="Decorative mountain graphic"
                            width={400}
                            height={150}
                            className="md:ml-56 w-[300px] ml-10 mt-2"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-20">
                <Image
                    src="/down-arrow 2.svg"
                    alt="down-arrow"
                    width={70}
                    height={150}
                />
            </div>

            <div className="mt-40 md:ml-20 md:mr-20">
                <h1 className="text-4xl font-bold text-center">Let's get in touch.</h1>
                <form className="mx-auto p-4 sm:p-6 space-y-4">
                    
                    <div className="flex flex-col sm:flex-row gap-8">
                        <input
                            type="text"
                            placeholder="Your name*"
                            className="w-full sm:flex-1 border border-red-300 bg-red-50 placeholder-red-400 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <input
                            type="text"
                            placeholder="Your email*"
                            className="w-full sm:flex-1 border border-red-300 bg-red-50 placeholder-red-400 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Subject*"
                        className="w-full border border-red-300 bg-red-50 placeholder-red-400 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />

                    <textarea
                        placeholder="Your message*"
                        rows={8}
                        className="w-full border border-red-300 bg-red-50 placeholder-red-400 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                    ></textarea>

                    <div className="flex justify-start items-start mt-4">
                        <button
                            type="submit"
                            className="px-10 py-1 rounded-full border border-red-400 text-red-600 font-semibold hover:bg-red-100 transition"
                        >
                            Send
                        </button>
                    </div>
                    <Image
                        src="/background-element29.svg"
                        alt="semi-circle"
                        width={180}
                        height={150}
                        className="absolute right-0 top-[700px] hidden md:block" 
                    />
                    <Image
                        src="/arrows.svg"
                        alt="arrows"
                        width={50}
                        height={40}
                        className="absolute right-[50px] top-[1000px] hidden md:block"
                    />
                </form>
            </div>
        </div>
    );
}

export default Contact;
