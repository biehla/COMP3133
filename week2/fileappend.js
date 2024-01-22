import * as fs from 'node:fs'

// const str = 'George Brown College'
async function appendData(str) {
  try {
    await fs.appendFileSync('outData.txt', str, () => { flag: 'a+' })
    console.log('file appended')
  } catch (error) {
    console.log(error);
  }
}

appendData("\n1 - George Brown College!")
appendData("\n2 - George Brown College!")
appendData("\n3 - George Brown College!")
