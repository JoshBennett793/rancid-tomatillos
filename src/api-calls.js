export const fetchMovieData = async () => {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        'There seems to be a problem. Please try refreshing your browser.'
      )
    }
    const data = await response.json()

    return data
  } catch (error) {
    return error
  }
}

export const fetchSingleMovie = async id => {
  const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        'There seems to be a problem. Please try refreshing your browser.'
      )
    }
    const data = await response.json()

    return data
  } catch (error) {
    return error
  }
}
