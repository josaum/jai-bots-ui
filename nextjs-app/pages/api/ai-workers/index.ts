import { NextApiRequest, NextApiResponse } from 'next'
import { AiWorker } from '../../../types/ai-worker'
import { readParquet, writeParquet } from '../../../utils/parquet'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const aiWorkers: AiWorker[] = await readParquet('public/ai-workers.parquet')
        res.status(200).json(aiWorkers)
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving AI Workers' })
      }
      break
    case 'POST':
      try {
        const aiWorker: AiWorker = req.body
        const aiWorkers: AiWorker[] = await readParquet('public/ai-workers.parquet')
        aiWorkers.push(aiWorker)
        await writeParquet('public/ai-workers.parquet', aiWorkers)
        res.status(201).json(aiWorker)
      } catch (error) {
        res.status(500).json({ message: 'Error creating AI Worker' })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}