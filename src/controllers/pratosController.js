import PratoModel from "../models/pratosModel.js";

class PratoController {
  getAll = async (req, res) => {
    try {
      const pratos = await PratoModel.getAll();
      res.json(pratos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar pratos" });
    }
  };

    // GET /api/dishes/:id
    async getDishById(req, res) {
      try {
        const { id } = req.params;
  
        const dish = await PratoModel.findById(id);
  
        if (!dish) {
          return res.status(404).json({ error: "Dish não encontrado" });
        }
  
        res.json(dish);
      } catch (error) {
        console.error("Erro ao buscar dish:", error);
        res.status(500).json({ error: "Erro ao buscar dish" });
      }
    }
  

   // POST /api/pratos
   async create(req, res) {
    try {
      // Validação básica
      const {
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime
      } = req.body;

      // Verifica se o título do prato foi fornecido

      if (
        !name ||
        !description ||
        !price ||
        !category ||
        !ingredients ||
        !imageUrl ||
        !prepTime 
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo dish
      const newPrato = await PratoModel.create(
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime
      );

      if (!newPrato) {
        return res.status(400).json({ error: "Erro ao criar prato" });
      }

      res.status(201).json(newPrato);
    } catch (error) {
      console.error("Erro ao criar prato:", error);
      res.status(500).json({ error: "Erro ao criar prato" });
    }
  }

  update = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, ingredients, imageUrl, prepTime } = req.body;

    try {
      const pratoAtualizado = await PratoModel.update(
        Number(id),
        name, 
        description, 
        price, 
        category, 
        ingredients, 
        imageUrl, 
        prepTime
      );

      if (!pratoAtualizado) {
        return res.status(404).json({ erro: "Prato não encontrado!" });
      }

      res.json(pratoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar prato!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await PratoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Prato não encontrada" });
      }

      res.status(200).send({ message: "Prato deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir prato!" });
    }
  };
}
export default new PratoController();
