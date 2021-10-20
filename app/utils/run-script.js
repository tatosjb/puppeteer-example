import { getPage } from '../singletons.js';

export default async function runScript(fn){
  const page = await getPage()

  return await page.evaluate(fn)
}
