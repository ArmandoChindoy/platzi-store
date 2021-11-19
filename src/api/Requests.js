import axios from 'axios'

export const GET = async (url, sendParams) => {
  const params = Object.assign({}, sendParams)
  const lang = localStorage.getItem('lang') || 'es'
  try {
    return await axios({
      headers: {
        lang
      },
      url,
      method: 'GET',
      params
    })
  } catch (error) {
    console.error(error)
  }
}
