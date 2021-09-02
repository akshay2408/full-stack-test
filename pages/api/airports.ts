import { NextApiRequest, NextApiResponse } from 'next'

import { allAirportsWithSearch } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search_query }= req.query;
  const airports = await allAirportsWithSearch(search_query);

  res.status(200).json(airports)
}
