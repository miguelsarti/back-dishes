import express from "express";
import pratoRoutes from "./routes/pratosRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/pratos", pratoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
