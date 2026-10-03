const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkDatabaseConnection = async () =>{
    await prisma.$queryRaw`SELECT 1`;
};

const disconnectDatabase = async () =>{
    await prisma.$disconnect();
};

module.export = {
    prisma ,
    checkDatabaseConnection,
    disconnectDatabase
};
