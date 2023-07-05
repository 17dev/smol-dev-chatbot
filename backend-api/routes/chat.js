const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');

// Get all chats
router.get('/', async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new chat
router.post('/', async (req, res) => {
  const chat = new Chat({
    name: req.body.name,
    database: req.body.database
  });

  try {
    const newChat = await chat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get one chat
router.get('/:id', getChat, (req, res) => {
  res.json(res.chat);
});

// Update one chat
router.patch('/:id', getChat, async (req, res) => {
  if (req.body.name != null) {
    res.chat.name = req.body.name;
  }
  if (req.body.database != null) {
    res.chat.database = req.body.database;
  }
  try {
    const updatedChat = await res.chat.save();
    res.json(updatedChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one chat
router.delete('/:id', getChat, async (req, res) => {
  try {
    await res.chat.remove();
    res.json({ message: 'Deleted Chat' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for getChat
async function getChat(req, res, next) {
  let chat;
  try {
    chat = await Chat.findById(req.params.id);
    if (chat == null) {
      return res.status(404).json({ message: 'Cannot find chat' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.chat = chat;
  next();
}

module.exports = router;