import React from 'react'
import useInitailState from '@/hooks/useInitialState'
import AppRoutes from '@/routes/AppRoutes'
import AppContext from './context/AppContext'

const App = () => {
  const { data, loading, error } = useInitailState()
  console.log('isEmpty', loading)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>
  return (
    <AppContext.Provider value={data}>
      <AppRoutes />
    </AppContext.Provider>
  )
}

export default App
