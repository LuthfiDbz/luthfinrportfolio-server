import mongoose from 'mongoose'

const Portfolio = mongoose.Schema({
  projectName: {
    type: String
  },
  projectSector: {
    type: String
  },
  projectType: {
    type: String
  },
  desc: {
    type: String
  },
  tech: {
    type: Array
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
})

export default mongoose.model('Portfolio', Portfolio)