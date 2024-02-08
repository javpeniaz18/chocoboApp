import { DataGrid } from "@mui/x-data-grid";
import "./carrito.css";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "Category", headerName: "Category", width: 150 },
  { field: "Price", headerName: "Price", width: 150 },
];

const Carrito = () => {
  const { listaCompras } = useContext(CartContext);
  const [selectedRows, setSelectedRows] = useState([]);

  // Calcular el total a pagar sumando los precios de los objetos en listaCompras
  const totalAPagar = listaCompras.reduce(
    (total, item) => total + Math.round(parseFloat(item.price)),
    0
  );

  const handleEliminar = () => {
    selectedRows.forEach((row) => {
      eliminarCompra(row.id);
    });
    setSelectedRows([]);
  };

  return (
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={listaCompras.map((item, index) => ({
          ...item,
          id: item.id,
          Name: item.title,
          Category: item.category,
          Price: item.price,
        }))}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectedRows(
            newSelection.selectionModel.map((selectedId) =>
              listaCompras.find((row) => row.id === selectedId)
            )
          );
        }}
        pageSizeOptions={[5, 10]}
      />
      <div className="d-flex justify-content-end">
        <div className=" mt-4 pe-1 col-2">
          <p>Total a pagar: ${totalAPagar}</p>
          <hr></hr>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Button className="me-3" variant="contained">
          Pay
        </Button>
      </div>
    </div>
  );
};

export default Carrito;
