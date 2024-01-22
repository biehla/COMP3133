import fs from "node:fs"
import zlib from "zlib"
import { Transform } from "node:stream"


const readStream = fs.createReadStream('data.txt', 'utf8')
const writeStream = fs.createWriteStream('out_data.txt', 'utf8')

readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("out_stream.gz"));

const toUpper = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();
    callback(null, result);
  }
})


const customDataReader = fs.createReadStream('./customReadString.txt')
customDataReader.pipe(toUpper).pipe(fs.createWriteStream("out_stream.text"));
