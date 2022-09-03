import { React } from 'react'
import NewsIllustration from '../components/IllustrationComponent/NewsIllustration'
import NewsLayout from '../components/NewsComponents/NewsLayout'
import { useFetch } from '../hooks/useFetch'

export default function Archived () {
  const url = 'http://localhost:5000/api/news'
  const { data, error } = useFetch({ url })
  console.log(window.location.pathname)

  const getContent = () => {
    if (error) return <h2 className='text-white'>Error when fetching: {error}</h2>
    if (!data) return null

    const archivedNews = data.filter(advice => advice.archiveDate !== null).sort((adviceFirst, adviceSecond) => new Date(adviceSecond.archiveDate) - new Date(adviceFirst.archiveDate))

    return (
      archivedNews.length ? <NewsLayout advices={archivedNews} /> : <NewsIllustration archivedNewsLength={archivedNews.length} />
    )
  }

  return (
    <div className='container mx-auto mb-20'>
      {getContent()}
    </div>
  )
}
