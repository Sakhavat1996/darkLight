import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './pages/Page'
import ThemeComponentProvider from './store/theme-context'

function App() {
  return (
    <ThemeComponentProvider>
      <Page/>
    </ThemeComponentProvider>
  )
}

export default App
