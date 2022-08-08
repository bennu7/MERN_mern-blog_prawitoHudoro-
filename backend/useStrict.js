// let Obj1 = 060; // Dikenali sebagai kesalahan (error)
// // let Obj2 = \060; // Dikenali sebagai kesalahan (error)
// let Obj3 = 060 + 180 + 200; // Dikenali sebagai kesalahan (error)

// console.log(Obj1);
// console.log(Obj3);

// const axios = require("axios");

// axios
//   .get("http://localhost:3000/api/v1/user")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   })
//   .then(() => {
//     console.log("then");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const person = {
//   firstName: "lalu ibnu",
//   lastName: "hidayatullah",
//   get fullName() {
//     //=> getters
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = "lalu ilham akbar syafi'i";
// // getters => access properties
// // setters => change (mutate) them / properties
// console.log(person);

// const myToday = "i'm so fine and need programming";
// let changeSplit = myToday.split(" ");
// console.log(changeSplit);
// console.log(changeSplit.slice(0, 2));

// //Membuat object dengan property readonly
// var facebook = {};
// Object.defineProperty(facebook, "app", { value: 50, writable: false });
// // *NOTE: pengen update tapi ga bisa
// facebook.app = 103; //Dikenali sebagai kesalahan (error)
// console.log(facebook.app);

// // Membuat object dengan property readonly
// var twitter = {
//   get app() {
//     return 51;
//   },
// };
// twitter.app = 130; //Dikenali sebagai kesalahan (error)
// console.log(twitter.app); //ga bisa di ganti

// // Membuat object dengan property pada object yang tidak dikenali
// var google = {};
// Object.preventExtensions(google);
// google.newProp = "app"; // Dikenali sebagai kesalahan (error)
// console.log(google.newProp);
