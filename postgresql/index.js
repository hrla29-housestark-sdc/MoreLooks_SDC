const Sequelize = require('sequelize');

const sequelize = new Sequelize('test','','',{
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Product = sequelize.define('products', {
    // attributes
    productname: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    imageurl: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    shoesizes: {
        type: Sequelize.TEXT,
    },
    designer: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    itemtype: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false 
    }
  }, {
    timestamps : false
  });

  Product.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return Product.create({
        productname: "Bernelle Mule",
        imageurl:`
          "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/a758ba8d-3595-4557-9d49-6029a1626e4c.jpeg",
          "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/6fddc649-4738-4674-b261-5e2157822540.jpeg",
          "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/a3b1d9af-4d6c-4200-9158-ea39ed284d29.jpeg"`,
    
        shoesizes: "1,2,3",
        designer: "ACNE STUDIO",
        price: 480,
        color:  "black",
        itemtype: "shoe",
        description: "A leather strap design gives a cute signature statement on a slide sandal with a lightly cushioned footbed."
      });
  });