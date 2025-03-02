import './index.scss'
import Form from './components/form'
import { IoMdAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { useState } from 'react'
import UpdateVigencyPDF from './components/updateDocument'

function App() {
  const [create, setCreate] =useState(false);

  return (
    <>
    <div className='nav'>
      <button title='Editar' className={`${create ? '' : 'active'}`} onClick={() => setCreate(false)}><MdEdit /></button>
      <button title='Crear' className={`${create ? 'active' : ''}`} onClick={() => setCreate(true)}><IoMdAdd /></button>
    </div>
    {
      create ? <Form /> : <UpdateVigencyPDF/>
    }
    </>
  )
}

export default App
