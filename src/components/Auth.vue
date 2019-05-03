<template>
  <div class="hello">
    <h1>You are authorized</h1>

  </div>
</template>

<script>
export default {
  name: 'Auth',
  props: {
  
  }, 
  mounted() {

    let hash_str = location.hash
    let start = hash_str.indexOf('=') + 1 
    let end = hash_str.indexOf('&')
    let access_token = hash_str.substring(start, end)
    
    this.$spotify.setAccessToken(access_token)

    // // exxample from docs, gets Elvis albumns 
    // this.$spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    //   function(data) {
    //     console.log('Artist albums', data);
    //   },
    //   function(err) {
    //     console.error(err);
    //   }
    // );

    // get current user 
    this.$spotify.getMe()
      .then( data => { return data.id  })
      .then( userid => 
        // Create a private playlist for this user 
        this.$spotify.createPlaylist(userid, { name: 'my vue playlist',  'public' : true })
      )
      .then( playlist => {
        console.log('created playlist ', playlist)
        // add a song 4YMjssjl6JWPF4ZIcvcwkg
        // Can add many songs, just add to the array
        this.$spotify.addTracksToPlaylist(playlist.id, ['spotify:track:4YMjssjl6JWPF4ZIcvcwkg'])
      })
      .then( response => console.log('added song to playlist', response ))
      .catch(err => console.log(err))

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
