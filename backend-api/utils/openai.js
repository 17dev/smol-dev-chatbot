```javascript
const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

const createChat = async (message) => {
  try {
    const response = await openai.post('/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 60
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createChat
};
```