import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function RenderGroup({ products, setProducts }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log("los productos son:", products);

  // Utilizamos un conjunto para almacenar categorías únicas
  const uniqueCategories = new Set(products.map((product) => product.category));

  // Convertimos el conjunto de categorías únicas de vuelta a un array
  const top100Films = Array.from(uniqueCategories).map((category) => ({
    title: category,
  }));

  const handleCategoryChange = (selectedCategory) => {
    const filtered = products.filter(
      (product) => product.category === selectedCategory
    );
    setFilteredProducts(filtered);

    console.log("los elementos filtrados son:");
  };

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
        onChange={(event, value) => handleCategoryChange(value.title)}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </ThemeProvider>
  );
}
