import { React } from 'react'
import NewsIllustration from '../components/IllustrationComponent/NewsIllustration'
import NewsLayout from '../components/NewsComponents/NewsLayout'
import { useFetch } from '../hooks/useFetch'

export default function Home () {
  const url = 'http://localhost:5000/api/news'
  const { data, error } = useFetch({ url })

  console.log(window.location.pathname)
  const getContent = () => {
    if (error) return <h2 className='text-white'>Error when fetching: {error}</h2>
    if (!data) return null

    const advicesOrdered = data.filter(advice => advice.archiveDate === null).sort((adviceFirst, adviceSecond) => new Date(adviceSecond.date) - new Date(adviceFirst.date))

    return (
      advicesOrdered.length ? <NewsLayout advices={advicesOrdered} /> : <NewsIllustration pathName={window.location.pathname} notesLength={advicesOrdered.length} />
    )
  }

  return (
    <div className='container mx-auto mb-20'>
      {getContent()}
    </div>
  )
}
