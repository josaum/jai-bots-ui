import { ParquetReader, ParquetSchema } from 'parquetjs';
import fs from 'fs';
import path from 'path';

import { AIWorker } from '../types/ai-worker';

const aiWorkerSchema = new ParquetSchema({
  id: { type: 'INT64' },
  name: { type: 'UTF8' },
  description: { type: 'UTF8' },
  skills: { type: 'UTF8' },
  integrations: { type: 'UTF8' },
  basePrompt: { type: 'UTF8' },
});

const parquetFilePath = path.join(process.cwd(), 'public', 'ai-workers.parquet');

export async function readParquetFile(): Promise<AIWorker[]> {
  const reader = await ParquetReader.openFile(aiWorkerSchema, parquetFilePath);
  const rows = [];
  let row = null;
  while (row = await reader.read()) {
    rows.push(row);
  }
  await reader.close();
  return rows;
}

export async function writeParquetFile(aiWorkers: AIWorker[]): Promise<void> {
  const writer = await ParquetWriter.openFile(aiWorkerSchema, parquetFilePath);
  for (const aiWorker of aiWorkers) {
    await writer.appendRow(aiWorker);
  }
  await writer.close();
}