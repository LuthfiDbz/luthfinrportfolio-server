import mongoose from 'mongoose'

const Client = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  subject: {
    type: String
  },
  text: {
    type: String
  }
})

export default mongoose.model('Client', Client)