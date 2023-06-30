import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import AiWorkerForm from '../../components/AiWorkerForm';
import { AiWorker } from '../../types/ai-worker';
import { readParquetFile, writeParquetFile } from '../../utils/parquet';

const AiWorkerPage = ({ aiWorker }: { aiWorker: AiWorker }) => {
  const router = useRouter();
  const [worker, setWorker] = useState(aiWorker);

  const handleUpdate = async (updatedWorker: AiWorker) => {
    await writeParquetFile('public/ai-workers.parquet', updatedWorker);
    setWorker(updatedWorker);
  };

  const handleDelete = async () => {
    await writeParquetFile('public/ai-workers.parquet', null, worker.id);
    router.push('/');
  };

  return (
    <Layout title={`AI Worker ${worker.name}`}>
      <AiWorkerForm aiWorker={worker} onUpdate={handleUpdate} onDelete={handleDelete} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const aiWorker = await readParquetFile('public/ai-workers.parquet', params.id as string);
  return { props: { aiWorker } };
};

export default AiWorkerPage;