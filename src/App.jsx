import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/modal.jsx'
// import Counter from './components/counter.jsx'
import React, { useState, useEffect } from 'react';

function App() {

  // return <Counter />

  const [showModal, setShowModal] = useState(false)

  function onTodoDelete(){
    setShowModal(true)
  }

  function onModalCancel(){
    setShowModal(false)
  }

  useEffect(() => {
    console.log('on mount')
  }, [])

  return (
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)

        }} />
        <button >Add todo</button>
      </div>
      <div className='todo__wrapper'>
        <Todo onTodoDelete={onTodoDelete} title="Finish Crash Course" />
        <Todo onTodoDelete={onTodoDelete} title="Interview Section"/>
        <Todo onTodoDelete={onTodoDelete} title="Get Job"/>
      </div>
      {showModal && <Modal onModalCancel={onModalCancel} title="Confirm delete" />}
    </>
  );
}

export default App;
