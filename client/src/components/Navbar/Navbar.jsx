import { React } from 'react'
import MenuItems from './MenuItems'

export default function NavBar () {
  return (
    <nav className='sm:container sm:mx-auto'>
      <div className='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6'>
        <MenuItems />
      </div>
    </nav>
  )
}
