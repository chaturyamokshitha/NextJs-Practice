// src/app/api/information/route.js
import clientPromise from "@/lib/mongodb";


export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("budget_tracker");
        const userInfo = await req.json();
        const result = await db.collection("information").insertOne(userInfo);

        const insertedUser = await db.collection("information").findOne({ _id: result.insertedId });
        return new Response(JSON.stringify(insertedUser), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to save user info" }), { status: 500 });
    }
}




// ✅ Handle GET request to fetch data from MongoDB
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("budget_tracker"); // ✅ Database: expense_tracker
        const information = await db.collection("information").find({}).toArray();

        return new Response(JSON.stringify(information), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "❌ Failed to fetch data" }), { status: 500 });
    }
}
