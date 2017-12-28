<template>
  <div class="page">
  	<video src="https://vodcn.iworku.com/Bingfen-Nongchang-1-x264-1025.mp4"></video>	
  	<!-- <my-video :sources="video.sources" :options="video.options"></my-video> -->
  </div>  
</template>

<script>
	import myVideo from 'vue-video'
	export default {
		components: {
			myVideo
		},
		data() {
		  return { 
		  	video: {
          sources: [{
            src: 'https://vodcn.iworku.com/Bingfen-Nongchang-1-x264-1025.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: true,
            volume: 0.6,
            poster: 'http://covteam.u.qiniudn.com/poster.png'
          }
	      }
		  }
		},  
		computed: {
		},    
		created() {
		},
		methods: {
		}
	}
</script>

<style lang='scss'>
    
</style>
