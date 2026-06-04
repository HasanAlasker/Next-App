import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "Hasan", age: 22 },
    { id: 2, name: "Mosa", age: 23 },
  ]);
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  if(!body.name) return NextResponse.json({error: 'name required'}, {status: 400})
  return NextResponse.json({id: 1, name: body.name}, {status: 201});
}
