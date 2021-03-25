<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('onShow')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 小程序中不支持 *通配符 */
	page,view,text,swiper,swiper-item,image,navigator{
	  padding:0;
	  margin: 0;
	  box-sizing: border-box;
	}
</style>
