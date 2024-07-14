console.log("Express Tutorial");
const express = require("express");
const app = express();
const { products } = require("./data");
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/api/v1/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const productID = parseInt(req.params.productID, 10);
  const product = products.find((p) => p.id === productID);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }

  res.json(filteredProducts);
});

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});
