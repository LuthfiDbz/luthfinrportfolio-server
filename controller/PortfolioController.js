import Portfolio from "../model/PortfolioModel.js"
import Client from "../model/ClientModel.js"

export const getPortfolio = async (req, res) => {
  try {
    const users = await Portfolio.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getPortfolioById = async (req, res) => {
  try {
    const user = await Portfolio.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getClient = async (req, res) => {
  try {
    const users = await Client.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}