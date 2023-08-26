const axios = require('axios')

class MovieController{
    static async fetchMovies(req, res, next){
        try {
            const { data } = await axios({
                url : `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
                method : 'GET',
                headers:{
                    accept : 'application/json',
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNhZDcyMGYyZGRkOWQ4NzQ4YzgzYTBmYjY0NmU1YSIsInN1YiI6IjY0ZThiZDNlYzNjODkxMDEzYWIxZjkyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k1ZHpAm6fj9rd42AiKm8rq0EdOwsTJtcSgtHFT6LvTE'
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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNhZDcyMGYyZGRkOWQ4NzQ4YzgzYTBmYjY0NmU1YSIsInN1YiI6IjY0ZThiZDNlYzNjODkxMDEzYWIxZjkyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k1ZHpAm6fj9rd42AiKm8rq0EdOwsTJtcSgtHFT6LvTE'                
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