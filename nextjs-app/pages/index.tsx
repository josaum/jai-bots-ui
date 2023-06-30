import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import AiWorkerCard from '../components/AiWorkerCard'
import { AiWorker } from '../types/ai-worker'
import { readParquetFile } from '../utils/parquet'

type Props = {
  aiWorkers: AiWorker[]
}

const HomePage = ({ aiWorkers }: Props) => (
  <Layout title="AI Workers Catalog">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {aiWorkers.map((aiWorker) => (
        <Link href={`/ai-worker/${aiWorker.id}`} key={aiWorker.id}>
          <a>
            <AiWorkerCard aiWorker={aiWorker} />
          </a>
        </Link>
      ))}
    </div>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const aiWorkers = await readParquetFile('public/ai-workers.parquet')
  return { props: { aiWorkers } }
}

export default HomePage