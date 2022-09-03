import { React } from 'react'
import NewsCard from './NewsCard'

export default function NewsLayout ({ advices }) {
  return (
    <div className='flex flex-col'>
      {advices.map((advice, i) => (
        <NewsCard key={i} advice={advice} />
      ))}
    </div>
  )
}
