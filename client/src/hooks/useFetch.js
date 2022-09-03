import { useEffect, useState } from 'react'

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setError(data.message)
          return
        }
        setData(data)
      })
      .catch((err) => {
        setError(err)
      })
  }, [url])

  return { data, error }
}
