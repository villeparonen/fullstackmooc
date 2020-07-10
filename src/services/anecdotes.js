import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const randomNum = () => `${Math.floor(Math.random() * 100000)}`

const createNew = async (content) => {
    const object = { content, id: randomNum(), votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const voteAnecdote = async (idd) => {
    const response = await axios.get(baseUrl)
    await axios.delete(`${baseUrl}/${idd}`)
    const anecdoteWithIncreasedVote = await axios.post(baseUrl, { ...response.data.find(i => i.id === idd), votes: response.data.find(i => i.id === idd).votes + 1 })
    return anecdoteWithIncreasedVote
}




export default { getAll, createNew, voteAnecdote }