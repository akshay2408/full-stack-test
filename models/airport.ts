import airports from '../data/airports.json'
import Airport from '../types/airport'

export const findAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  return airports.find(airport => airport.iata === iata.toUpperCase())
}

export const allAirports = async (): Promise<Airport[]> => {
  return airports
}

export const allAirportsWithSearch = async (searchQuery): Promise<Airport []> => {
  return airports.filter(airport => airport.iata.toLowerCase().includes(searchQuery.toLowerCase())
  || airport.name.toLowerCase().includes(searchQuery.toLowerCase())
  || airport.country.toLowerCase().includes(searchQuery.toLowerCase())
  || airport.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
}