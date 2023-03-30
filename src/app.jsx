import { useState } from 'preact/hooks'
import './app.css'
import Header from './components/Header/Header'
import Team from './components/Team/Team'

export function App() {
  return (
    <>
      <Header />
      <Team />
    </>
  )
}
