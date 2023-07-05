```javascript
import LangChain from 'langchain';

const langChain = new LangChain();

export const generateResponse = async (message) => {
  try {
    const response = await langChain.generateResponse(message);
    return response;
  } catch (error) {
    console.error('Error generating response with LangChain:', error);
    throw error;
  }
};

export const trainModel = async (data) => {
  try {
    const result = await langChain.trainModel(data);
    return result;
  } catch (error) {
    console.error('Error training model with LangChain:', error);
    throw error;
  }
};

export const updateModel = async (data) => {
  try {
    const result = await langChain.updateModel(data);
    return result;
  } catch (error) {
    console.error('Error updating model with LangChain:', error);
    throw error;
  }
};

export const deleteModel = async (modelId) => {
  try {
    const result = await langChain.deleteModel(modelId);
    return result;
  } catch (error) {
    console.error('Error deleting model with LangChain:', error);
    throw error;
  }
};
```