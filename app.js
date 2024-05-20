const fs = require("fs");
const files = fs.readdir("./", (err, files) => {
  if (err) console.log(err);
  else console.log(files);
});
