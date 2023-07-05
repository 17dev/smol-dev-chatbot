```javascript
import { createClient } from '@vercel/ai';

// Initialize Vercel AI client
const vercelAI = createClient({
  projectId: process.env.VERCEL_AI_PROJECT_ID,
  apiKey: process.env.VERCEL_AI_API_KEY,
});

export default vercelAI;
```