```javascript
import { OpenAIAPI } from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAIAPI(OPENAI_API_KEY);

async function generateResponse(prompt) {
  const gptResponse = await openai.complete({
    engine: 'gpt-3.5-turbo-16k-0613',
    prompt: prompt,
    max_tokens: 60,
  });

  return gptResponse.data.choices[0].text.trim();
}

export default generateResponse;
```