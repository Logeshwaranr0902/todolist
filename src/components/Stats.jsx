import React from 'react'

const Stats = ( {toDoList}) => {
    let countList = toDoList.length;
  return (
    <div className='stats'>
        <p className='notify'>
            {countList ===0 ? 'You Got Everything! Ready to go': `You have ${countList} items on your list.`}
        </p>
    </div>
  )
}

export default Stats