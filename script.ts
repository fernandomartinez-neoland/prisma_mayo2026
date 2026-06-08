import { prisma } from "./lib/prisma";

async function main() {
  // Create a new user with a post
  const Products = await prisma.Products.create({
    data: {
      title: "tablet",
      price: 15.3,
      description: "es hecha en china",
    },

  });
  console.log("Created user:", Products);

  // Fetch all users with their posts
  const allProducts = await prisma.Products.findFirst()
  console.log("All users:", JSON.stringify(allProducts, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
