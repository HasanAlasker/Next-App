import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users });
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 },
    );

  const exists = await prisma.user.findUnique({
    where: { email: validation.data.email },
  });
  if (exists)
    return NextResponse.json(
      { error: "User already registered" },
      { status: 400 },
    );

  const newUser = await prisma.user.create({ data: validation.data });
  if (!newUser)
    return NextResponse.json({ error: "User not created" }, { status: 400 });

  return NextResponse.json({ newUser }, { status: 201 });
}
