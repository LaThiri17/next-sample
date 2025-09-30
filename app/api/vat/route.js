// Handle GET /api/vat?amount=100
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const amount = parseFloat(searchParams.get("amount") || "0");
    const rate = parseFloat(process.env.VAT_RATE || "0.07");
    const vat = amount * rate;
    return Response.json({ rate, amount, vat });
  }
  
  // Handle POST /api/vat { amount: 100 }
  export async function POST(req) {
    const body = await req.json();
    const amount = parseFloat(body.amount || "0");
    const rate = parseFloat(process.env.VAT_RATE || "0.07");
    const vat = amount * rate;
    return Response.json({ rate, amount, vat });
  }
  