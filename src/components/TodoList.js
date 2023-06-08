import React, { useState } from 'react'

const TodoList = (props) => {
  const { list, index, removeTask } = props

  // mark and unmark task when click
  const [IsCheck, setIsCheck] = useState(false)

  const textStyle = 'w-full bg-slate-50 py-3 text-left ml-5 hover:opacity-60'
  const textStyleCheck = textStyle + ' line-through'

  const markList = () => {
    setIsCheck(!IsCheck)
  }

  return (
    <div>
      <div onClick={markList}>
        <p className={IsCheck ? textStyleCheck : textStyle}>
          {list.task}{' '}
          <span onClick={() => removeTask(index)} className="absolute right-5 font-bold hover:text-red-800">
            x
          </span>
        </p>
      </div>
    </div>
  )
}

export default TodoList
