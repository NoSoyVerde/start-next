import React from "react";

export default async function PaginaProducto(
    {
        params
    }: {
        params:Promise<{idproducto:string}>}
) {
    // Codigo para cargar idproducto de una base de datos
  return (
    <div id="paginaproducto">
      <h1>Esta es la pagina de productos</h1>

      <div>
        <h3>Descripcion</h3>

      </div>
    </div>
  );
}
