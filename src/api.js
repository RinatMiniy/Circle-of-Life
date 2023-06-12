const SERVER_URL = 'http://localhost:3002/students'

async function getTodos(query, endpoint = SERVER_URL) {
  try {
    query ? (query = `?${query}`) : (query = '')

    const response = await fetch(`${endpoint}${query}`)

    if (!response.ok) throw new Error(response.statusText)

    const json = await response.json()
    console.log(json)
    return json
  } catch (err) {
    console.error(err.message || err)
  }
}
getTodos()