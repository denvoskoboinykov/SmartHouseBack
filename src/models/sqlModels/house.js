module.exports = (sequelize, Sequelize) => {
  const House = sequelize.define(
    'house',
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return House;
};
