import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#18A1F9').all(10))

  const onSubmitHandler = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      
      setList(colors)
      setError(false)

    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={onSubmitHandler}>
          <input className={`${error ? 'error' : null}`}
            type="text"
            placeholder="#18A1F9"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} index={index} hex={color.hex} {...color} />
          )
        })}
      </section>
    </>
  )
}

export default App
