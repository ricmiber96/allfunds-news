import { React, useEffect, useState } from 'react'
import addNewIcon from '../../assets/img/add_new.svg'
import archivedNewIcon from '../../assets/img/archived_new.svg'

export default function NewsIllustration ({ pathName, notesLength }) {
  const [header, setHeader] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (!notesLength && pathName === '/') {
      setHeader('You don`t have any New')
      setImage(addNewIcon)
    } else {
      setHeader('You don`t have news on Archived')
      setImage(archivedNewIcon)
    }
  }, [pathName])

  return (
    <div className='flex flex-col w-full items-center'>
      <h2 className='text-xl text-yellow-400 mb-10'>{header}</h2>
      <img className='w-28 md:w-40 lg:w-80' src={image} />
    </div>
  )
}
