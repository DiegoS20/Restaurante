import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = {
  id: string;
};
export const GET = async (_: Request, { params }: { params: Params }) => {
  const id = +params.id;

  const pedido = await prisma.pedido.findUnique({
    where: {
      id,
    },
    include: {
      DetallePedido: true,
    },
  });

  return NextResponse.json({
    message: "Pedido encontrado exitosamente",
    pedido,
  });
};

export const PATCH = async (req: Request, { params }: { params: Params }) => {
  const id = +params.id;
  const { estado } = (await req.json()) as PatchBody;

  await prisma.pedido.update({
    where: {
      id,
    },
    data: {
      estado,
    },
  });

  return NextResponse.json({
    message: "Updated successfully",
  });
};

type PatchBody = {
  estado: "CONFIRMACION" | "PREPARACION" | "ENTREGA";
};
