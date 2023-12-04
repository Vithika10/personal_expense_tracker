const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;

// const mongoose = require('mongoose');
// const MONGO_CONNECTION_URI = process.env.MONGO_URI;
// console.log(MONGO_CONNECTION_URI);
// const connectDB = async () => {
//     // Check if MONGODB URI is Provided
//     try {
//          if (MONGO_CONNECTION_URI !== "") {
//             // Database Connection
//             console.log("Intialising database connection...");
//             mongoose.set("strictQuery", true);
//             mongoose.connect(MONGO_CONNECTION_URI);
//             const connection = await mongoose.connection;
//             connection.once("open", () => {
//                 console.log("Database connected !");
//             });
//             connection.on("error", () => {
//                 console.error("Could not connect to Database");
//                 console.error("Exiting...");
//                 process.exit(1);
//             });
//         } else {
//           console.warn("MongoDB URL not found");
//             console.error("Could not connect to Database");
//             console.error("Exiting...");
//             process.exit(1);
//         }
//     } catch (err) {
//         console.error("Could not connect to Database");
//         console.error("Exiting...");
//         process.exit(1);
//     }
// };
// module.exports = connectDB;