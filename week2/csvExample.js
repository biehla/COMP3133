import fs from "node:fs"

async function addEmployee(eid, enm, salary) {
  const str = `${eid},${enm},${salary}\n`
  try {
    await fs.appendFileSync('emp.csv', str, () => { flag: 'a+' })
    console.log('file appended')
  } catch (error) {
    console.log(error);
  }
}

addEmployee(1, "Anand", 1000)
addEmployee(2, "not Anand", 100)
