import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home'



export const routes = {
  home: '/',
}

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path={routes.home} element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
