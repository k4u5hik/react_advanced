import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('john doe')

  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value: {secondValue}</h1> */}
      <h1>{text || 'kaushik c'}</h1>
      {text && <h1>hello world !!!</h1>}
    </>
  )
}

export default ShortCircuit
