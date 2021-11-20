import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'

import Layout from '../components/Layout'
import NotFound from '../containers/NotFound'
// import useInitailState from '@/hooks/useInitialState';

const AsyncCheckOutContainer = React.lazy(() => import('../containers/Checkout'))

const AppRoutes = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/checkout' element={<AsyncCheckOutContainer />} />
          <Route component={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Suspense>
)

export default AppRoutes
