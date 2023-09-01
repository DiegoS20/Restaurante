import { NextResponse } from "next/server";
import { Client } from "pg";

const client = new Client({
  port: 5433,
  database: "restaurante",
  password: "admin",
  user: "postgres",
});

export const GET = async () => {
  try {
    await client.connect();

    const res = await client.query('SELECT * FROM "Producto"');
    return NextResponse.json({
      message: "Categorias retreived successfully",
      categorias: res.rows,
    });
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }

  return NextResponse.json({
    message: "Categorias retreived successfully",
    categorias: [],
  });
};
