import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import { prisma } from "@/app/lib/prisma";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id: id } });
  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ user });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      email: validation.data.email,
      name: validation.data.name,
    },
  });

  if (!updatedUser)
    return NextResponse.json({ error: "user not updated" }, { status: 400 });

  return NextResponse.json({ updatedUser });
}

// export async function DELETE(request: NextRequest, { params }: Props) {
//   const { id } = await params;
//   const user = await prisma.user.findUnique({ where: { id: id } });

//   if (!user)
//     return NextResponse.json({ error: "user not found" }, { status: 404 });

//   const deletedUser = await prisma.user.update({
//     where: { id: id },
//     // data: { isActive: !user.isActive },
//   });

//   return NextResponse.json({ deletedUser });
// }
