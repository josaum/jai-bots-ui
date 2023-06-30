export interface AIWorker {
  id: string;
  name: string;
  description: string;
  skills: string[];
  integrations: string[];
  basePrompt: string;
}