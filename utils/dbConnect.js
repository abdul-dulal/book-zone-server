const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Server connected SUCCESSFULLY`.yellow.italic))
    .catch((err) => console.log(err.message.underline.red));
};

module.exports = dbConnect;
