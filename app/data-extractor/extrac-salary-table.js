export default function extractSalaryTable(){
  function buildHeaders(headers) {
    return headers.map(header => {
      return header.textContent
    })
  }

  function buildLine(line) {
    return Array.from(line.querySelectorAll('td')).map(element => {
      return element.textContent
    })
  }

  function buildBody(lines) {
    return lines.map(line => {
      return buildLine(line)
    })
  }

  const table = document.querySelector('.listas')
  const headers = Array.from(table.querySelectorAll('thead th'))
  const lines = Array.from(table.querySelectorAll('tbody tr'))

  const data = [
    ...buildHeaders(headers),
    ...buildBody(lines)
  ]

  return data
}
