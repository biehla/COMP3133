import * as fs from "node:fs"

fs.open('out_data.txt', 'r+', (err, fd) => {
  if (err) {
    console.log(err);
    throw err;
  }

  /*
  fs.read(fd, (err, data, bytesRead) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log(`Read ${bytesRead} bytes from file`)
    console.log(data.toString())
  })
  */

  const data_to_write = Buffer.from("Hello world again!")
  fs.write(fd, data_to_write, 0, data_to_write.length, 0, (err, fd) => {
    if (err) {
      console.log(err)
      throw err;
    }
  })

  const buffer = Buffer.alloc(1024);
  fs.read(fd, buffer, 0, buffer.length, 6, (err, bytesRead, buffer) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log(`Read ${bytesRead} bytes from file`)
    console.log(buffer.toString())
  })
})
