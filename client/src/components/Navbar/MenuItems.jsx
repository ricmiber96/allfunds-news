import { React } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBookmarkCheckFill, BsNewspaper } from 'react-icons/bs'
import AddNewsButton from './AddNewsButton'

export default function MenuItems () {
  const menuLinks = [
    {
      href: '/',
      title: 'News',
      icon: <BsNewspaper />
    },
    {
      href: '/archived',
      title: 'Archived',
      icon: <BsFillBookmarkCheckFill />
    }
  ]

  return (
    <div className='flex-row sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-end items-center shadow-lg sm:shadow-none sm:w-full'>
      {
            menuLinks.map((link, i) => (
              <Link className='block text-left text-lg font-semibold text-white hover:text-yellow-400 sm:mx-4 mb-2 sm:py-2 mt-2' key={i} to={link.href}>
                <div className='flex space-x-4'>
                  <span className='mt-1'>{link.icon}</span>
                  <h2>{link.title}</h2>
                </div>
              </Link>
            ))
        }
      <AddNewsButton />
    </div>
  )
}
