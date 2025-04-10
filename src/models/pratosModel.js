import prisma from "../../prisma/client.js";

class PratoModel {
  getAll = async () => {
    return await prisma.dish.findMany();
  };

  // Obter um anime pelo ID
  async getDishById(id) {
    const dish = await prisma.dish.findUnique({
      where: {
        id: Number(id),
      },
    });

    return dish;
  }

  async create(
    name,
    description,
    price,
    category,
    ingredients,
    imageUrl,
    prepTime,
  ) {
    const newdish= await prisma.dish.create({
      data: {
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime,
      },
    });

    return newdish;
  }

  update = async (id, name, description, price, category, ingredients, imageUrl, prepTime) => {
    try {
      const dish = await prisma.dish.update({
        where: { id },
        data: {
          name,
          description,
          price,
          category,
          ingredients,
          imageUrl,
          prepTime
        },
      });

      return dish;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const dishDeletado = await prisma.dish.delete({
        where: { id },
      });

      return dishDeletado;
    } catch (error) {
      console.log("Erro ao deletar o dish!", error);
      throw error;
    }
  };
}
export default new PratoModel();
