import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config('')

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0634",
        firstName: "KIMENYI",
        lastName: "Kevin",
        email: "kevin@gmail.com",
        password: await bcrypt.hash(process.env.ADIMIN_PASSWORD, Number(process.env.HASH_PASSWORD_SALT)),
        roleId: 10,
        roleName: "admin",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0633",
        firstName: "IZERE",
        lastName: "Ange Felix",
        email: "izerefaifelix@gmail.com",
        password: await bcrypt.hash(process.env.DEVELOPER1_PASSWORD, Number(process.env.HASH_PASSWORD_SALT)),
        roleId: 10,
        roleName: "developer",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0637",
        firstName: "NKUSI",
        lastName: "Kevin",
        email: "kevin@gmail.com",
        password: await bcrypt.hash(process.env.DEVELOPER2_PASSWORD, Number(process.env.HASH_PASSWORD_SALT)),
        roleId: 10,
        roleName: "developer",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0639",
        firstName: "CLICK",
        lastName: "alain",
        email: "alain@gmail.com",
        password: await bcrypt.hash(process.env.MANAGER2_PASSWORD, Number(process.env.HASH_PASSWORD_SALT)),
        roleId: 10,
        roleName: "manager",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0659",
        firstName: "CLICK",
        lastName: "kevine",
        email: "kevine@gmail.com",
        password: await bcrypt.hash(process.env.MANAGER2_PASSWORD, Number(process.env.HASH_PASSWORD_SALT)),
        roleId: 10,
        roleName: "manager",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {})
  }
};
