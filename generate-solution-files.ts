const { readdirSync, mkdirSync, writeFileSync } = require('fs')
import axios from 'axios'
import * as cheerio from 'cheerio'
import { startCase, camelCase } from 'lodash'

;(async () => {
  const completedProjectIds = readdirSync(`${__dirname}/solutions/`, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)
    .filter((name: string) => name.includes('proj-'))
    .map((name: string) => parseInt(name.replace('proj-', '')))
  let nextProjectId = 0
  for (let id = 1; id <= 10000; id++) {
    if (!completedProjectIds.includes(id)) {
      nextProjectId = id
      break
    }
  }

  const projectIdString = String(nextProjectId).padStart(4, '0')

  const projectUrl = `https://projecteuler.net/problem=${nextProjectId}`

  const response = await axios(projectUrl)
  const html = response.data
  const $ = cheerio.load(html)
  const title = $('h2').text()

  const projectTitle = startCase(title)

  const functionName = camelCase(title)

  mkdirSync(`${__dirname}/solutions/proj-${projectIdString}`)

  const projectFileContent = `
// ${projectTitle}
// ${projectUrl}

export const ${functionName} = () => {
  return 0;
};
`

  writeFileSync(`${__dirname}/solutions/proj-${projectIdString}/index.ts`, projectFileContent)

  const testFileContent = `
import { ${functionName} } from '../proj-${projectIdString}/index';

describe('Solution for ${projectTitle}', () => {
  const answer = ${functionName}();
  it('Should have the correct result', () => {
    expect(answer).toBe(-1);
    // update this expected value from the list of answers found here https://github.com/luckytoilet/projecteuler-solutions/blob/master/Solutions.md
  });
});
`

  writeFileSync(`${__dirname}/solutions/test/solution-${projectIdString}.test.ts`, testFileContent)
})()
