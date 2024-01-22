import * as fs from 'node:fs'
const csv = require("csv-parser")

const main = async () => {
  fs.unlink('canada.txt', () => {
  });
  fs.unlink("./usa.txt", () => {
  });

  let data = fs.createReadStream("./input_countries.csv").pipe(csv({}))

  let canadaStream = fs.createWriteStream("canada.txt")
  let usaStream = fs.createWriteStream("usa.txt")

  let canada = data.filter((data) => data.country == "Canada")
  //.pipe(canadaStream)
  let usa = data.filter((data) => data.country == "United States")
  //.pipe(usaStream)

  canada.on("data", (data) => {
    canadaStream.write(JSON.stringify(data) + "\n")
  })

  usa.on("data", (data) => {
    canadaStream.write(JSON.stringify(data) + "\n")
  })

  canadaStream.close()
  usaStream.close()
}

main()
