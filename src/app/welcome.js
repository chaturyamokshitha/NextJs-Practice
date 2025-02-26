"use client";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
});

export default function Welcome() {
    const [income, setIncome] = useState("");
    const [name, setName] = useState("");
    const [goals, setGoals] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        const formData = { income, name, goals };

        try {
            const response = await fetch("/api/test", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem("currentUser", JSON.stringify(userData)); // ✅ Store current user
                setMessage("Data saved successfully! ✅");
                router.push("/home"); // ✅ Navigate to home
            } else {
                setMessage("Error saving data. ❌");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error saving data. ❌");
        }
    };

    return (
        <div className={`min-h-screen flex flex-col md:flex-row bg-[#1E1E1E] ${openSans.className}`}>
            <div className="hidden md:flex w-1/2 bg-yellow-50 flex-col justify-between">
                <h1 className="text-3xl pt-16 pl-20 italic text-black">
                    Calculate Smarter, <br /> Spend Wiser ...
                </h1>
                <div className="w-full">
                    <Image
                        src="/home.svg"
                        width={800}
                        height={1000}
                        alt="Budget Planning"
                        className="object-contain self-end"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-[#1E1E1E] text-white flex flex-col justify-center items-center p-10 md:p-8 mt-28">
                <h2 className="text-4xl sm:text-5xl mb-8 text-center">
                    <span className="text-white">Monthly </span>
                    <span className="text-green-400">Budget</span>
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-8 w-full sm:w-3/4">
                    <input
                        type="text"
                        placeholder="Insert Your Income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        className="w-full p-4 bg-[#1E1E1E] placeholder-gray-400 placeholder:text-xl text-center text-white outline-none border-0 border-b-2 border-gray-400 focus:border-green-400 transition-all"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Insert Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 bg-[#1E1E1E] placeholder-gray-400 placeholder:text-xl text-center text-white outline-none border-0 border-b-2 border-gray-400 focus:border-green-400 transition-all"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Insert Your Goals"
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        className="w-full p-4 bg-[#1E1E1E] placeholder-gray-400 placeholder:text-xl text-center text-white outline-none border-0 border-b-2 border-gray-400 focus:border-green-400 transition-all"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#FFE600] mt-6 hover:bg-yellow-500 text-gray-900 py-3 rounded-sm transition-all"
                    >
                        Start Your Calculation
                    </button>
                </form>

                {message && <p className="text-green-400 mt-4">{message}</p>}
            </div>
        </div>
    );
}
