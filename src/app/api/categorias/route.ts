import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { name } = (await req.json()) as ReqInputs;

  try {
    await prisma.categoria.create({
      data: {
        nombreCategoria: name,
      },
    });

    return NextResponse.json(
      { message: "Category successfully created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error creating category: ${error}`,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  const categories = await prisma.categoria.findMany();

  return NextResponse.json({
    message: "Categories successfully retrieved",
    categories,
  });
};

type ReqInputs = {
  name: string;
};
