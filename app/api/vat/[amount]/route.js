export async function GET(_, { params }) {
    const amount = parseFloat(params.amount || "0");
    const rate = parseFloat(process.env.VAT_RATE || "0.07");
    const vat = amount * rate;
    return Response.json({ rate, amount, vat });
  }
  