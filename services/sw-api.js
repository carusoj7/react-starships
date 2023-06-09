const baseUrl = "https://swapi.dev/api"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  console.log("response ===>", res)

  return res.json()
}

export async function getStarshipById(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return res.json()
}

