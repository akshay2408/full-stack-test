import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../components/layout'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'


const Page: NextPage = () => {
  const {
    data: airports,
    setSearchQuery,
  } = useApiData<Airport[]>('/api/airports', [])

  return <Layout>
    <h1 className='text-2xl font-bold'>Code Challenge: Airports</h1>

    <h2 className="mt-10 text-xl font-semibold">All Airports</h2>
    <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder="search" className='p-2 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none'/>
    <div>
      {airports.map(airport => (
        <Link href={`/airports/${airport.iata.toLowerCase()}`} key={airport.iata}>
          <a className='flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none'>
            <span>
              {airport.name}, {airport.city}
            </span>
            <span className='ml-auto text-gray-500'>
              {airport.country}
            </span>
          </a>
        </Link>
      ))}
    </div>
  </Layout>
}

export default Page
