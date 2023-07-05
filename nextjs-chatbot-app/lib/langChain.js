```javascript
import LangChain from 'langchain';

const langChain = new LangChain({
  apiKey: process.env.LANGCHAIN_API_KEY,
});

export default langChain;
```