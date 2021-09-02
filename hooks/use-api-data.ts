import axios from "axios"
import Airport from '../types/airport';
import { useEffect, useState } from "react"


interface UseApiDataReturnType {
  data: Airport[],
  setSearchQuery: (searchQuery: string) => void,
}


export const useApiData = <T>(path: string, defaultValue: any): UseApiDataReturnType => {
  const [ data, setData ] = useState<[]>(defaultValue)
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (!searchQuery) {
      setData(defaultValue);
    } else {
      axios.get<T>(`${path}?search_query=${searchQuery}`).catch(err => err.response).then(response => {
        if (searchQuery) {
          setData(response.data)
        }
      })
    }
  }, [searchQuery])

  return { data, setSearchQuery }
}

export default useApiData
