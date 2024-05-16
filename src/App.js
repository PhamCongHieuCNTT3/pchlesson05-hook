import React from 'react'
import PchUseState from './components/PchUseState'
import PchUseEffect from './components/PchUseEffect'
import PchUseContext from './components/PchUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Phạm Công Hiếu - Hook</h1>
        <hr/>
        <PchUseState />
        <hr/>
        <PchUseEffect/>
        <hr/>
        <PchUseContext/>
    </div>
  )
}
