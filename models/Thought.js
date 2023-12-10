const mongoose = require('mongoose');
const { Schema, model, Types } = require('mongoose');

// Define ReactionSchema
const ReactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString(),
  },
});

// Define ThoughtSchema using ReactionSchema as a subdocument
const ThoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],  // Use ReactionSchema here
});

// Create virtual property for formatting timestamp
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create model
const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;
