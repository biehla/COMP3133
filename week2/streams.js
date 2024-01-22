import fs from 'node:fs'

const readStream = fs.createReadStream('data.txt', "utf8")
const writeStream = fs.createWriteStream('out_data.txt', 'utf8')

readStream.on('data', (chunk) => {
  console.log("Reading data...")
  writeStream.write(chunk);
  console.log(chunk);
})

readStream.on('end', () => {
  console.log('finished reading data');
  //writeStream.end();
})

writeStream.write("1 - Hello world")
writeStream.write("2 - Hello world")
writeStream.write("3 - Hello world")
writeStream.end()

writeStream.on('error', (err) => {
  console.log(err);
})

writeStream.on("close", () => {
  console.log("Finished writing data")
})
