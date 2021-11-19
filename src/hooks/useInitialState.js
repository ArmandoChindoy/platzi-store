import { useEffect, useState } from 'react'
import { GET } from '@/api/Requests'
import { initialState } from '../api/Urls'

const useInitailState = () => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(async () => {
    console.log('url', initialState)
    setLoading(true)
    try {
      const { data } = await GET(initialState)
      setLoading(false)
      console.log('Data', data)
      setData(data)
    } catch (error) {
      setError(error)
    }
  }, [])
  return { data, loading, error }
}

export default useInitailState
