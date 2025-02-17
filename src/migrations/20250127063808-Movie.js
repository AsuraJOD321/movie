

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("movies", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imdbScore: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      directorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "directors", // Name of the table being referenced
          key: "id", // Column in the referenced table
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
      },
      actors: {
        type: Sequelize.JSON, // Correct capitalization for JSON type
        allowNull: false,
      },
      genreId: {
        type: Sequelize.INTEGER, // Fixed typo (type instead of types)
        allowNull: false,
        references: {
          model: "genres", // Name of the table being referenced
          key: "id", // Column in the referenced table
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      embedVideoUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      avgRatings: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      totalRatings: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      releasedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("movies");
  },
};
