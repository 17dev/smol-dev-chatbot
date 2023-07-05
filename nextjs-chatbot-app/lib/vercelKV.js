import { withEdge } from '@vercel/edge-functions';
import { get, set, del } from '@vercel/kv-storage';

export const vercelKV = {
  getChatHistory: async (chatId) => {
    try {
      const chatHistory = await get(`chatHistory_${chatId}`);
      return chatHistory || [];
    } catch (error) {
      console.error('Error getting chat history:', error);
      return [];
    }
  },

  setChatHistory: async (chatId, chatHistory) => {
    try {
      await set(`chatHistory_${chatId}`, chatHistory);
    } catch (error) {
      console.error('Error setting chat history:', error);
    }
  },

  deleteChatHistory: async (chatId) => {
    try {
      await del(`chatHistory_${chatId}`);
    } catch (error) {
      console.error('Error deleting chat history:', error);
    }
  },

  getDatabaseConnection: async (chatId) => {
    try {
      const databaseConnection = await get(`databaseConnection_${chatId}`);
      return databaseConnection || null;
    } catch (error) {
      console.error('Error getting database connection:', error);
      return null;
    }
  },

  setDatabaseConnection: async (chatId, databaseConnection) => {
    try {
      await set(`databaseConnection_${chatId}`, databaseConnection);
    } catch (error) {
      console.error('Error setting database connection:', error);
    }
  },

  deleteDatabaseConnection: async (chatId) => {
    try {
      await del(`databaseConnection_${chatId}`);
    } catch (error) {
      console.error('Error deleting database connection:', error);
    }
  },

  getFileUpload: async (fileId) => {
    try {
      const fileUpload = await get(`fileUpload_${fileId}`);
      return fileUpload || null;
    } catch (error) {
      console.error('Error getting file upload:', error);
      return null;
    }
  },

  setFileUpload: async (fileId, fileUpload) => {
    try {
      await set(`fileUpload_${fileId}`, fileUpload);
    } catch (error) {
      console.error('Error setting file upload:', error);
    }
  },

  deleteFileUpload: async (fileId) => {
    try {
      await del(`fileUpload_${fileId}`);
    } catch (error) {
      console.error('Error deleting file upload:', error);
    }
  },
};

export default withEdge(vercelKV);