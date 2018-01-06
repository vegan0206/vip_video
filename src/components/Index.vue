<template>
  <div class="page">
  	<!-- <my-video :sources="video.sources" :options="video.options"></my-video> -->
  	<ul class="site-list" v-if='videoList'>
  		<li class="item" 
  			v-for='item in videoList' 
  			:key='item.name' 
  			:title='item.name'
  			@click='getList(item)'>
  			<img :src="item.img" :alt='item.name' width='100%'>
  		</li>
  		<Modal v-model='showModal'>
  			<div class="detail-list" v-if='detailList.length'>	
					<a href='javascript:;' class="item" v-for='item in detailList' :key='item.name' @click="getVIPURL(item.url)" v-text='item.name'></a>
  			</div>
  		</Modal>
  	</ul>
  </div>  
</template>

<script>
	import myVideo from 'vue-video'
	import axios from '@/plugins/axios.js'
	export default {
		components: {
			myVideo
		},
		data() {
		  return { 
		  	showModal: false,
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
	      },
	      videoList: [],
	      detailList: [],
        baiyugURL: ''
		  }
		},  
		computed: {
		},    
		created() {
			this.init()
		},
		methods: {
			init() {
				axios.get('/api/iqiyi/dianshi/list').then(body => {
					this.videoList = body.data
				})				
			},
      // 显示当前选中电视
			getList(item) {
				this.showModal = true
				this.detailList = item.list
			},
      // 获取vip播放路径
      getVIPURL(url) {
        window.open('http://api.baiyug.cn/vip/index.php?url=' + url)
      }
		}
	}
</script>

<style lang='scss'>
  .page{
  	width: 1200px;
  	margin: 0 auto;
  	font-size: 14px;
  	line-height: 1.4;
  	color: #333;
  	& .site-list{
  		width: 100%;
  		height: auto;
  		zoom: 1;
  		overflow: hidden;
  		& .item{
  			float: left;
  			width: 20%;
  			padding: 0 20px 20px 0;
  			cursor: pointer;
  		}
  	}
  }  
</style>
