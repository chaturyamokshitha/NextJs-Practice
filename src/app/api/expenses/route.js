import clientPromise from "@/lib/mongodb";

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("budget_tracker");
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        const expenses = await db
            .collection("expenses")
            .find({ userId })
            .toArray();

        return new Response(JSON.stringify(expenses), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch expenses" }), { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("budget_tracker");
        const expense = await req.json();
        const result = await db.collection("expenses").insertOne(expense);
        return new Response(JSON.stringify({ message: "Expense added successfully", result }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to add expense" }), { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const client = await clientPromise;
        const db = client.db("budget_tracker");
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        await db.collection("expenses").deleteMany({ userId });
        return new Response(JSON.stringify({ message: "All expenses deleted successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to delete expenses" }), { status: 500 });
    }
}
