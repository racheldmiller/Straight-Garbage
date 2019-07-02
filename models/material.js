const sequelize = require("../config/connection");
const Sequelize = require("sequelize");

var axios = require("axios");

const Model = Sequelize.Model;
class Material extends Model {}
Material.init(
  {
    // attributes
    // id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   primaryKey: true
    // },
    type: {
      type: Sequelize.STRING,
      default: null,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    materialID: {
      type: Sequelize.STRING,
      allowNull: true
    }
    // createdAt: Sequelize.DATE
  },
  {
    sequelize,
    modelName: "Material",
    timestamps: false
    // createdAt: (allowNull = true)
  }
);

module.exports = Material;

// Material.findAll().then(result => {
//   console.log(result);
// });

// Material.findOne({ where: { id: 96 } }).then(result => {
//   console.log(result.dataValues);
// });

// Material.findAll({
//   attributes: ["type"]
// }).then(result => {
//   console.log(result);
// });
// Material.findAll({ raw: true }).then(function(result) {
//   console.log(result);
// });

// Material.sync({ force: true }).then(() => {
//   return axios
//     .get(
//       "http://api.earth911.com/earth911.getMaterials?api_key=6ee9222b20473f36"
//     )
//     .then(function(response) {
//       const results = response.data.result;
//       const promiseArray = [];
//       console.log(results);
//       for (var i = 0; i < results.length; i++) {
//         console.log(results);
//         promiseArray.push(
//           Material.create({
//             type: results[i].type,
//             description: results[i].description,
//             image: results[i].image,
//             materialID: results[i].material_id
//           })
//         );
//       }
//       console.log(promiseArray);
//       sequelize
//         .transaction(() => {
//           return Promise.all(promiseArray);
//         })
//         .then(result => {
//           console.log(result);
//           console.log("we have all the data");
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     });
// });

// Material.create({
//   //   id: 1,
//   type: "test",
//   description: "test",
//   image: "more testing",
//   materialID: "lots of testing"
// }).then(() => {
//   console.log("success");
// });
