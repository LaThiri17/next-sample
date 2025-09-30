export async function GET() {
    const rate = parseFloat(process.env.VAT_RATE || "0.07");
    return Response.json({ rate });
  }
  