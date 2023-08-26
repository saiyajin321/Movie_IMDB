const axios = require('axios')
const BEARER_TOKEN = process.env.BEARER_TOKEN
console.log(BEARER_TOKEN);

class MovieController{
    static async fetchMovies(req, res, next){
        try {
            const { data } = await axios({
                url : `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
                method : 'GET',
                headers:{
                    accept : 'application/json',
                    Authorization : `Bearer ${BEARER_TOKEN}`
                }
            })
            res.status(200).json(data.results)
        } catch (err) {
            next(err)
        }
    }

    static async fetchMovieById(req, res, next){
        try {
            const id = +req.params.id
            const { data } = await axios({
                url : `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                method : 'GET',
                headers : {
                    accept: 'application/json',
                    Authorization : `Bearer ${BEARER_TOKEN}`
                    
                }
            })
            if(!data){
                throw {name : 'noMovie'}
            }
            res.status(200).json(data)
        } catch (err) {
            res.status(404).json({message:err.response.data.status_message})
        }
    }
}

module.exports = { MovieController }