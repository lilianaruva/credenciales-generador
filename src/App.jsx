import './index.scss'
import Form from './components/form'
import { IoMdAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { useState } from 'react'

function App() {
  const [create, setCreate] =useState(true);

  return (
    <>
    <div className='nav'>
      <button title='Editar' className={`${create ? '' : 'active'}`} onClick={() => setCreate(false)}><MdEdit /></button>
      <button title='Crear' className={`${create ? 'active' : ''}`} onClick={() => setCreate(true)}><IoMdAdd /></button>
    </div>
    {
      create ? <Form /> : <></>
    }
    </>
  )
}

export default App
