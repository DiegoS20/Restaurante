export default async function add(name: string) {
  const res = await fetch("/api/categorias", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  return res.status == 201;
}
