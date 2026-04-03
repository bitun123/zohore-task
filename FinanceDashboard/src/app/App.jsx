import React from 'react'
import { AppRoute } from './AppRoute'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <RouterProvider router={AppRoute} />
  )
}

export default App