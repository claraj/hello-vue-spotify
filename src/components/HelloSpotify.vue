<template>
  <div class="hello">
    <h1>Hello Spotify</h1>

    <button @click="spotifyLogin">Log in to Spotify</button>
  </div>
</template>

<script>
export default {
  name: 'HelloSpotify',
  data() {
    return {}
  }, 
  methods: {
    spotifyLogin() {
    let client_id = 'YOUR CLIENT ID HERE'  // TODO set this 

    let redirect_uri = encodeURIComponent('http://127.0.0.1:8082/auth')

    var url = 'https://accounts.spotify.com/authorize?'
    url += `client_id=${client_id}`
    url += '&response_type=token' 
    url += `&redirect_uri=${redirect_uri}`
    url += '&scope=playlist-read-private%20playlist-modify-public%20playlist-modify-private'

    window.location.href = url   // redirect to Spotify auth URL
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
