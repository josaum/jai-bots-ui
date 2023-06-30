import { useState } from 'react';
import { AiWorker } from '../types/ai-worker';
import styles from '../styles/AiWorkerForm.module.css';

interface AiWorkerFormProps {
  initialData?: AiWorker;
  onSubmit: (data: AiWorker) => void;
}

export default function AiWorkerForm({ initialData, onSubmit }: AiWorkerFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [skills, setSkills] = useState(initialData?.skills || '');
  const [integrations, setIntegrations] = useState(initialData?.integrations || '');
  const [basePrompt, setBasePrompt] = useState(initialData?.basePrompt || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, skills, integrations, basePrompt });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label>
        Skills:
        <input type="text" value={skills} onChange={e => setSkills(e.target.value)} />
      </label>
      <label>
        Integrations:
        <input type="text" value={integrations} onChange={e => setIntegrations(e.target.value)} />
      </label>
      <label>
        Base Prompt:
        <textarea value={basePrompt} onChange={e => setBasePrompt(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}