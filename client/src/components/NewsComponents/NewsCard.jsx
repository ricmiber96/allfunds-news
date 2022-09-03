import { useEffect, React, useState } from 'react'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

export default function NewsCard ({ advice }) {
  const [date, setDate] = useState(null)

  const dateFormated = (date) => {
    const dateResult = date.split('T')
    return dateResult[0]
  }
  const arhivedAdvice = (id) => {
    fetch(`http://localhost:5000/api/archived/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    window.location.reload(false)
  }

  const deleteAdvice = (id) => {
    fetch(`http://localhost:5000/api/news/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    window.location.reload(false)
  }

  useEffect(() => {
    setDate(dateFormated(advice.date))
  }, [])

  return (
    <article className='flex flex-row items-start  bg-gray-600 border-yellow-500 rounded-lg border-2 shadow-md mb-10 space-x-4'>
      <img className='object-cover h-96' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt='' />
      <div className='flex flex-col mt-10 px-4 w-full'>
        <header>
          <h2 className='mb-2 text-2xl font-bold text-white'>{advice.title}</h2>
          <p className='mb-3 font-normal text-gray-400 '>{advice.content}</p>
        </header>
        <div className='flex flex-col'>
          <div className='w-full flex flex-row align-bottom justify-end space-x-4  text-indigo-400'>
            <p>{date}</p>
            <p>{advice.author}</p>
          </div>
          <div className='w-full flex flex-row justify-end mt-2 mb-8'>
            <button className='cursor-pointer text-yellow-400 hover:text-yellow-500' onClick={() => arhivedAdvice(advice._id)}>
              <BsFillBookmarkPlusFill size='2rem' />
            </button>
            {advice.archiveDate !== null
              ? (
                <button className='cursor-pointer text-red-400 hover:text-red-500' onClick={() => deleteAdvice(advice._id)}>
                  <MdDelete size='2rem' />
                </button>)
              : null}
          </div>
        </div>
      </div>
    </article>
  )
}
