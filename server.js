const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

const Person = require("./Models/person");
app.use(express.json());
connectDB();
// Create Many Records

// Person.create(
//     [
//         {
//             name: "yasmine",
//             age: "22",
//             favoriteFoods: ["kosksi", "mlewi", "makloub"],
//         },
//         {
//             name: "hella",
//             age: "26",
//             favoriteFoods: ["loubya", "sandwitch", "makloub"],
//         },
//         {
//             name: "amal",
//             age: "29",
//             favoriteFoods: ["kosksi", "cake", "mloukheya"],
//         },
//         {
//             name: "selem",
//             age: "24",
//             favoriteFoods: ["kosksi", "cake", "makloub"],
//         },
//         {
//             name: "mary",
//             age: "50",
//             favoriteFoods: ["lablebi", "cake", "makloub"],
//         },
//     ],
//     (err, data) => {
//         err ? console.log(err) : console.log("People saved", data);
//     }
// );
//Use model.find() to Search

// Person.find((err, data) => {

//     err ? console.log(err) : console.log("People found", data);
// });

//Use model.findOne()
// Person.findOne({ favoriteFoods: "lablebi" }, (err, data) => {
//     err ? console.log(err) : console.log("Person found", data);
// });

//Use model.findById()
// Person.findById({ _id: "60a0679c27dd3badc410b2c5" }, (err, data) => {
//     err ? console.log(err) : console.log("Person found by id", data);
// });

//Update
// Person.findOneAndUpdate(
//     { name: "helmi" },
//     { name: "sarra" },
//     {
//         new: true,
//         runValidators: true,
//     },
//     (err, data) => {
//         err ? console.log(err) : console.log("Person updated by name", data);
//     }
// );

//Delete
// Person.findByIdAndRemove({ _id: "60a0679c27dd3badc410b2c8" }, (err, data) => {
//     err ? console.log(err) : console.log("Person deleted by id", data);
// });

// Delete Many Documents

// Person.deleteMany({ name: "Marry" }, (err, data) => {
//     err ? console.log(err) : console.log("Person deleted by name", data);
// });

Person.find({ favoriteFoods: "cake" })

    .limit(2) // limit to 2 items
    .sort({ name: 1 }) // sort ascending by name
    .select({ age: false }) // hide age
    .exec((err, data) => {
        err
            ? console.log(err)
            : console.log("Person found by food and sorted ..", data);
    });
const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
