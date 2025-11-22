import { NextResponse } from "next/server";

let formations: any[] = [];

export async function GET() {
  return NextResponse.json(formations);
}

export async function POST(request: Request) {
  const data = await request.json();
  formations.push({ id: formations.length + 1, ...data });
  return NextResponse.json({ success: true });
}
