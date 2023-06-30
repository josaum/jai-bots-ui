import { NextApiRequest, NextApiResponse } from 'next'
import { AiWorker } from '../../../types/ai-worker'
import { readParquet, writeParquet } from '../../../utils/parquet'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const aiWorkers: AiWorker[] = await readParquet('public/ai-workers.parquet')

  switch (req.method) {
    case 'GET':
      const aiWorker = aiWorkers.find((worker) => worker.id === id)
      if (!aiWorker) {
        res.status(404).json({ message: 'AI Worker not found' })
        return
      }
      res.status(200).json(aiWorker)
      break
    case 'PUT':
      const updatedAiWorker: AiWorker = JSON.parse(req.body)
      const index = aiWorkers.findIndex((worker) => worker.id === id)
      if (index === -1) {
        res.status(404).json({ message: 'AI Worker not found' })
        return
      }
      aiWorkers[index] = updatedAiWorker
      await writeParquet('public/ai-workers.parquet', aiWorkers)
      res.status(200).json(updatedAiWorker)
      break
    case 'DELETE':
      const deleteIndex = aiWorkers.findIndex((worker) => worker.id === id)
      if (deleteIndex === -1) {
        res.status(404).json({ message: 'AI Worker not found' })
        return
      }
      aiWorkers.splice(deleteIndex, 1)
      await writeParquet('public/ai-workers.parquet', aiWorkers)
      res.status(200).json({ message: 'AI Worker deleted' })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}