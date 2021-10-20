import { getPage } from './singletons.js'
import runScript from './utils/run-script.js';
import extractSalaryTable from './data-extractor/extrac-salary-table.js';
export default async function runApp() {
  const page = await getPage()

  await page.goto('https://www.salario.com.br/tabela-salarial/', {
    waitUntil: 'networkidle2',
  })

  const data = await runScript(extractSalaryTable)

  console.log(data)

  // await browser.close();
}
