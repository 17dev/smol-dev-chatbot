```javascript
const LangChain = require('langchain');

const langChain = new LangChain();

const generateResponse = async (message) => {
  try {
    const response = await langChain.generateResponse(message);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  generateResponse,
};
```