import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTRlMzQ0MmIwMTE5MDdiNjA2MDZlNDg4NTMwZmQ0OCIsInN1YiI6IjVlYjJiNDM1ZWRlYjQzMDAxY2NiMWM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.umF-oa12OCyM1O0j4wXAWMLrv4NHnjr2fLyN2FjoyF4',
  },
});
