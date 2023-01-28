const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

//default size of the buffer is 64kb
//last buffer - remainder
//highWaterMark - control the size of the buffer  - 8kb

// for controll the size of the buffer we can use highWaterMark:
// const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });

// const stream = createReadStream("./content/big.txt", { encoding: "utf8" });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
