const API_URL = 'http://81.70.63.95:3080/api'

export async function fetchAPI(route) {
  console.log(API_URL + route);
  const res = await fetch(API_URL + route, {
    method: 'GET'
  })
  const json = await res.json()
  if (!json) {
    console.error(json.err)
    throw new Error('Failed to fetch API')
  }
  return json
}
