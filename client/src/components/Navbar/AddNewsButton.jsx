import { React, useState } from 'react'
import { IoAdd, IoSend } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function AddNewsButton () {
  const [visibleModal, setVisibleModal] = useState(false)
  const [advice, setAdvice] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    advice[name] = value
    advice.date = new Date()
    advice.archiveDate = null
    setAdvice(advice)
  }

  const sendAdvice = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/news/', {
      method: 'POST',
      body: JSON.stringify({
        ...advice
      }),
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
    setVisibleModal(!visibleModal)
    if (window.location.pathname !== '/') {
      navigate('/')
    } else {
      window.location.reload(false)
    }
  }

  return (
    <>
      <button className='flex justify-center' onClick={() => setVisibleModal(!visibleModal)}>
        <div className='
      flex
      w-36
      justify-center
      items-center
      text-lg
      text-font-normal
      font-medium
      hover:bg-yellow-500
      hover:border-yellow-500
      hover:text-white
      text-yellow-400
      border-2
      border-yellow-400
      rounded-md
      py-1
      '
        >
          <IoAdd className='ml-0 sm:ml-1 mr-2 sm:mr-3 w-6 sm:w-6' size='2rem' />
          <span>Add New</span>
        </div>
      </button>
      {
        visibleModal
          ? (
            <div className='flex justify-center items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                <div className=' rounded-xl border-0 shadow-lg relative flex flex-col w-max bg-gray-400  outline-2 focus:outline-none ring-2 ring-slate-100 space-y-6 px-10 pb-2'>
                  <div className='flex flex-col items-center justify-center mt-4'>
                    <div className='flex flex-row-reverse items-center'>
                      <h5 className='text-2xl font-semibold text-yellow-300'>Add New</h5>
                    </div>
                  </div>
                  <div className='relative p-4 flex-auto'>
                    <form onSubmit={sendAdvice}>
                      <div className='mt-2 p-4'>
                        <label
                          htmlFor='title'
                          className='block mb-2 text-sm font-medium text-slate-900'
                        >
                          Title
                        </label>
                        <input
                          id='title'
                          type='title'
                          name='title'
                          onChange={handleChange}
                          placeholder='Add title...'
                          className='bg-gray-600 placeholder-white text-white rounded-md focus:border-white p-2'
                        />
                      </div>
                      <div className='mt-2 p-4'>
                        <label
                          htmlFor='description'
                          className='block mb-2 text-sm font-medium text-slate-900'
                        >
                          Description
                        </label>
                        <input
                          id='description'
                          type='description'
                          name='description'
                          onChange={handleChange}
                          placeholder='Add description...'
                          className='bg-gray-600 placeholder-white text-white rounded-md focus:border-white p-2'
                        />
                      </div>
                      <div className='mt-2 p-4'>
                        <label
                          htmlFor='author'
                          className='block mb-2 text-sm font-medium text-slate-900'
                        >
                          Author
                        </label>
                        <input
                          id='author'
                          type='author'
                          name='author'
                          onChange={handleChange}
                          placeholder='Author'
                          className='bg-gray-600 placeholder-white text-white rounded-md focus:border-white p-2'
                        />
                      </div>
                      <div className='p-5'>
                        <label
                          htmlFor='content'
                          className='block mb-2 text-sm font-medium text-slate-900'
                        >
                          Content
                        </label>
                        <textarea
                          id='content'
                          name='content'
                          onChange={handleChange}
                          placeholder='Add new content...'
                          rows='6'
                          cols='22'
                          className='bg-gray-600 placeholder-white text-white rounded-md focus:border-white p-2'
                        />
                      </div>
                      <div className='flex items-center justify-between p-6'>
                        <button
                          className='py-3 px-5 mr-4 text-lg font-medium text-center text-white rounded-lg bg-red-600 sm:w-fit hover:bg-red-700'
                          type='button'
                          onClick={() => setVisibleModal(!visibleModal)}
                        >
                          Close
                        </button>
                        <button
                          type='submit'
                          className='py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-yellow-400 sm:w-fit hover:bg-yellow-500 focus:ring-4 focus:outline-none '
                        >
                          <div className='flex flex-row justify-center items-center text-lg'>
                            <IoSend className='mr-2' />
                            <span>Send</span>
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            )
          : null
      }
    </>
  )
}
