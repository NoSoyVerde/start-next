import React from "react";

export default async function PaginaProducto({
  params,
}: {
  params: { idproducto: string };
}) {
  // Ejemplo de carga de producto desde una base de datos simulada
  // Aquí iría tu lógica de fetch real
  const producto = await getProductoById(params.idproducto);

  return (
    <div id="paginaproducto">
      <h1>Esta es la pagina de productos</h1>

      <div>
        <h3>Descripción</h3>
        <p>{producto.descripcion}</p>
      </div>
    </div>
  );
}

// Simulación de función de fetch de datos
async function getProductoById(id: string) {
  // Esto sería reemplazado con fetch/consulta a la BD
  return {
    id,
    descripcion: `Producto con id ${id}`,
  };
}
