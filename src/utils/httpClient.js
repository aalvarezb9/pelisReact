
const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmJkZTQyOGQ2MmY2NDI0ODYwY2IxYTI4NWNlNGU3MCIsInN1YiI6IjYxNzA1NTYxMTNhMzIwMDA5MzFiNGZkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIowcdY1xZhB8Qhf6jNYoSbhdbnAkE5yPD5iNxsPbL8",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then(res => res.json())
}