<template>
	<view class="content">
		<navigator class="text-area"
							 :url="`/pages/article/article?id=${item.id}`"
							  v-for="item in news"
							 :key="item.id">
			<view>
				<text class="title">{{item.title}}</text>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [
					// {id: '1', title: '新闻1'},
				]
			}
		},
		onLoad() {
			uni.request({
				url: '/newslist',
				success: ({ // 异步必须用箭头函数
					data
				}) => {
					// console.log(data.news)
					this.news = data.news
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		padding: 30rpx;
		color: #8f8f94;
	}
</style>
