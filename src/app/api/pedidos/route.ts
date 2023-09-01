import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { productos } = (await req.json()) as ReqInputs;
    const pedido = await prisma.pedido.create({
      data: {
        estado: "CONFIRMACION",
        fechaActualizacion: new Date(),
        fechaPedido: new Date(),
        DetallePedido: {
          createMany: {
            data: productos.map((p) => ({
              productoId: p.id,
              cantidad: p.cantidad,
            })),
          },
        },
      },
    });

    return NextResponse.json({
      message: "Pedido created successfully",
      id: pedido.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error: ${error}`,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  const pedidos = await prisma.pedido.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return NextResponse.json({
    message: "Pedidos retrieved successfully",
    pedidos,
  });
};

type ReqInputs = {
  productos: { id: number; cantidad: number }[];
};
