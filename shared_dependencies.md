Shared Dependencies:

1. **Next.js**: Used across all files for server-side rendering, routing, and building the web application.

2. **TypeScript**: Used in all `.ts` and `.tsx` files for type checking and improved developer experience.

3. **Parquet**: Used in `parquet.ts` and `ai-workers.parquet` for managing the local database.

4. **Tailwind CSS**: Used in all `.css` files and in `_app.tsx` for styling the application.

5. **React**: Used in all `.tsx` files for building the user interface.

6. **AI Worker Schema**: Defined in `ai-worker.ts` and used in `ai-workers/index.ts`, `ai-workers/[id].ts`, `AiWorkerCard.tsx`, `AiWorkerForm.tsx`, and `ai-workers.parquet` for managing AI Worker data.

7. **AI Worker API**: Defined in `ai-workers/index.ts` and `ai-workers/[id].ts`, and used in `index.tsx` and `ai-worker/[id].tsx` for CRUD operations.

8. **AI Worker Components**: `AiWorkerCard.tsx` and `AiWorkerForm.tsx` are used in `index.tsx` and `ai-worker/[id].tsx` for displaying AI Worker data.

9. **Layout Component**: Defined in `Layout.tsx` and used in `_app.tsx`, `index.tsx`, and `ai-worker/[id].tsx` for the layout of the application.

10. **CSS Modules**: Defined in `globals.css`, `AiWorkerCard.module.css`, `AiWorkerForm.module.css`, and `Layout.module.css`, and used in their respective components for scoped styling.

11. **DOM Element IDs**: Used in `AiWorkerCard.tsx` and `AiWorkerForm.tsx` for handling user interactions.

12. **PostCSS**: Used in `postcss.config.js` and indirectly in all `.css` files for processing CSS.

13. **Tailwind Config**: Defined in `tailwind.config.js` and used indirectly in all `.css` files for configuring Tailwind CSS.

14. **Package.json**: Contains all the dependencies used across the project.

15. **tsconfig.json**: Contains the configuration for TypeScript used across all `.ts` and `.tsx` files.