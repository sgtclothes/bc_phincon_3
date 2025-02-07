import bcrypt from "bcrypt";

export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        "users",
        [
            {
                name: "John Doe",
                email: "john.doe@example.com",
                password: await bcrypt.hash("password123", 10),
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
            },
            {
                name: "Jane Doe",
                email: "jane.doe@example.com",
                password: await bcrypt.hash("password123", 10),
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true
            },
        ],
        {}
    );
};

export const down = async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
};
