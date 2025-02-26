"use client";
import { useEffect, useState } from "react";
import { SiNetflix } from "react-icons/si";
import { FaSpotify, FaAmazon, FaGoogle, FaFacebook } from "react-icons/fa";

export default function Home() {
    const [data, setData] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const storedUser = JSON.parse(localStorage.getItem("currentUser"));
            if (!storedUser) return window.location.replace("/welcome");
            setCurrentUser(storedUser);

            try {
                const expenseRes = await fetch(`/api/expenses?userId=${storedUser._id}`);
                const expenseData = await expenseRes.json();
                setExpenses(expenseData);
                setData(storedUser);
            } catch (error) {
                console.error("❌ Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // ✅ Add user expense
    const handleAddExpense = async () => {
        const expenseName = prompt("Enter the expense name:");
        if (!expenseName) return alert("❌ Expense name is required.");

        const expenseAmount = prompt("Enter the amount for the expense:");
        if (!expenseAmount || isNaN(expenseAmount)) return alert("❌ Please enter a valid number.");

        const newExpense = {
            userId: currentUser._id,
            name: expenseName,
            amount: parseFloat(expenseAmount),
            date: new Date().toLocaleDateString(),
        };

        const response = await fetch("/api/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newExpense),
        });

        if (response.ok) setExpenses((prev) => [...prev, newExpense]);
    };

    // ✅ Add optional expense
    const handleAddOptionalExpense = async (name, amount) => {
        const newExpense = {
            userId: currentUser._id,
            name,
            amount,
            date: new Date().toLocaleDateString(),
        };

        const response = await fetch("/api/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newExpense),
        });

        if (response.ok) setExpenses((prev) => [...prev, newExpense]);
    };

    // ✅ Reset expenses
    const handleResetExpenses = async () => {
        const response = await fetch(`/api/expenses?userId=${currentUser._id}`, { method: "DELETE" });
        if (response.ok) setExpenses([]);
    };

    const optionals = [
        { name: "Netflix", amount: 15.99, icon: <SiNetflix className="text-red-500 text-2xl" /> },
        { name: "Spotify", amount: 9.99, icon: <FaSpotify className="text-green-400 text-2xl" /> },
        { name: "Amazon", amount: 12.99, icon: <FaAmazon className="text-yellow-500 text-2xl" /> },
        { name: "Google", amount: 5.99, icon: <FaGoogle className="text-blue-500 text-2xl" /> },
        { name: "Facebook", amount: 3.99, icon: <FaFacebook className="text-blue-400 text-2xl" /> },
    ];

    if (!data) return <div className="text-center mt-10 text-white">Loading...</div>;

    const totalIncome = parseFloat(data?.income || 0);
    const totalSpent = expenses.reduce((acc, exp) => acc + exp.amount, 0);
    const available = totalIncome - totalSpent;
    const spentPercentage = totalIncome ? ((totalSpent / totalIncome) * 100).toFixed(0) : 0;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-5xl font-bold">
                    <span className="text-yellow-400">Expenses </span>
                    Monthly <span className="text-green-400">Budget</span>
                </h1>
                <div className="flex gap-4">
                    <button
                        onClick={handleAddExpense}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg"
                    >
                        ➕ New Expense
                    </button>
                    <div className="bg-gray-800 p-3 rounded-lg text-lg">
                        👋 Welcome, <strong>{data?.name}</strong>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 my-6"></div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 📑 Description Section */}
                <div className="col-span-1 bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-yellow-400 text-lg mb-3">📑 Description</h3>
                    {expenses.length === 0 ? (
                        <p className="text-center text-gray-400">
                            Looks like you haven't added any expenses yet. 🛒
                        </p>
                    ) : (
                        expenses.map((exp, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-700 p-4 my-2 rounded-lg">
                                <div>
                                    <p className="text-xl">{exp.name}</p>
                                    <p className="text-sm text-gray-400">Date: {exp.date}</p>
                                </div>
                                <p className="text-2xl font-semibold text-green-400">
                                    £{exp.amount.toFixed(2)}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {/* 📊 Calculation Section */}
                <div className="col-span-1 bg-white text-black p-8 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">📊 Calculation</h3>
                    <div className="text-center bg-yellow-100 text-black py-5 px-12 rounded-lg shadow-sm mb-6">
                        <p className="font-semibold tracking-wide">INCOME</p>
                        <p className="text-4xl font-bold">£{totalIncome.toLocaleString()}</p>
                    </div>
                    <div className="relative w-48 h-48 mb-6">
                        <svg className="w-full h-full">
                            <circle cx="96" cy="96" r="80" stroke="#d1d5db" strokeWidth="20" fill="none" />
                            <circle
                                cx="96"
                                cy="96"
                                r="80"
                                stroke="#10B981"
                                strokeWidth="20"
                                fill="none"
                                strokeDasharray={`${spentPercentage} 100`}
                                strokeLinecap="round"
                                transform="rotate(-90 96 96)"
                            />
                        </svg>
                        <p className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">
                            {spentPercentage}% Spent
                        </p>
                    </div>
                    <div className="flex justify-between w-full gap-4">
                        <div className="bg-gray-700 w-1/2 p-6 text-center rounded-lg">
                            <p>AVAILABLE</p>
                            <p className="text-green-400 text-2xl font-bold">£{available.toFixed(2)}</p>
                        </div>
                        <div className="bg-gray-700 w-1/2 p-6 text-center rounded-lg">
                            <p>SPENT</p>
                            <p className="text-red-400 text-2xl font-bold">£{totalSpent.toFixed(2)}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleResetExpenses}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black mt-8 py-3 px-12 rounded-lg text-lg font-semibold"
                    >
                        🔄 Reset Expenses
                    </button>
                </div>

                {/* ✨ Optionals Section */}
                <div className="col-span-1 bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">✨ Optionals</h3>
                    <p className="text-sm mb-4 text-gray-500">CHOOSE ANY FIX EXPENSES</p>
                    <ul className="space-y-4">
                        {optionals.map((opt, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    {opt.icon}
                                    <p className="text-lg">{opt.name}</p>
                                </div>
                                <button
                                    onClick={() => handleAddOptionalExpense(opt.name, opt.amount)}
                                    className="bg-green-400 hover:bg-green-500 text-black px-4 py-1 rounded"
                                >
                                    Select
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
