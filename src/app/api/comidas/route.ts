import { prismaExclude } from "@/utils";
import { NextResponse } from "next/server";
import prisma from "../db-connection";

export const POST = async (req: Request) => {
  try {
    const { nombreProducto, descripcion, precio, categoriaId, imageSrc } =
      (await req.json()) as ReqInputs;

    await prisma.producto.create({
      data: {
        nombreProducto,
        descripcion,
        precio,
        categoria: {
          connect: {
            id: categoriaId,
          },
        },
        imageSrc,
      },
    });

    return NextResponse.json(
      {
        message: "Comida created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error trying to create a food: ${error}`,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  const comidas = await prisma.producto.findMany({
    select: {
      ...prismaExclude("Producto", ["categoriaId"]),
      categoria: true,
    },
  });

  return NextResponse.json({
    message: "Comidas retrieved successfully",
    comidas: comidas,
  });
};

type ReqInputs = {
  nombreProducto: string;
  descripcion: string;
  precio: number;
  categoriaId: number;
  imageSrc: string;
};
