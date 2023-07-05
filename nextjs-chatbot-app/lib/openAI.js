```javascript
import { OpenAIAPI } from 'openai';

let openAI;

export const initializeOpenAI = (apiKey) => {
  openAI = new OpenAIAPI(apiKey);
};

export const generateResponse = async (prompt) => {
  try {
    const response = await openAI.complete({
      model: 'gpt-3.5-turbo-16k-0613',
      prompt,
      max_tokens: 60,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating response:', error);
  }
};
```