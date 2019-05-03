<template>
  <div class="hello">
    <h1>You are authorized</h1>
    <div>
      <input v-model="playlistName" placeholder="name a playlist">
    </div>
    <div>
      <button @click="createPlayListAddSong">Create a playlist with a song in it</button>    
    </div>

    <div>
      <p>
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      playlistName: 'My Vue Playlist',
      message: ''
    }
  }, 
  mounted() {

    let hash_str = location.hash
    let start = hash_str.indexOf('=') + 1 
    let end = hash_str.indexOf('&')
    let access_token = hash_str.substring(start, end)
    
    this.$spotify.setAccessToken(access_token)
  },

  methods: {
    createPlayListAddSong() {
  
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
          this.$spotify.createPlaylist(userid, { name: this.playlistName,  'public' : true })
        )
        .then( playlist => {
          console.log('created playlist ', playlist)
          this.message = 'Created playlist ' + this.playlistName
          // add a song 4YMjssjl6JWPF4ZIcvcwkg
          // Can add many songs, just add to the array
          this.$spotify.addTracksToPlaylist(playlist.id, ['spotify:track:4YMjssjl6JWPF4ZIcvcwkg'])
        })
        .then( response => {
          this.message += ' and added one song.'
          console.log('added song to playlist')
        })
        .catch(err => console.log(err))
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button, p {
  margin: 10px
}
</style>
