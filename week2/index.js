import * as fs from 'node:fs'

function fsAndStreams() {
  fs.readFile("./data.txt", 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
  })
}

fsAndStreams();

var data = fs.readFileSync('data.txt', 'utf8')
console.log(data)
console.log("end readFile")

var data = "Hello world"
fs.writeFile('out_data.txt', data, (err) => {
  if (err) throw err;
  console.log('File written')
})

console.log("adter write")

var data = "Hello world again sync!"
fs.writeFileSync('out_data.txt', data)

console.log("End writeFile")

