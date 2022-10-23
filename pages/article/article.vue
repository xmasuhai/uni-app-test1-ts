<template>
	<view>
		<view class="title">
			{{article.title}}
		</view>
		<!-- <view class="content">{{article.content}}</view> -->
		<rich-text class="content" :nodes="article.content">
			{{article.content}}
		</rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {}
			}
		},
		onLoad(e) {
			// console.log('e', e);
			let id = e.id
			uni.request({
				url: `/news?id=${id}`,
				success: ({
					data
				}) => {
					console.log('data.title', data.title)
					this.article = data
					uni.setNavigationBarTitle({
						title: data.title,
					})
				}
			})
		}
	}
</script>

<style lang="scss">
	.title {
		font-weight: 800;
		font-size: 2em;
		text-align: center;
		line-height: 2em;
	}

	.content :deep(p) {
		text-indent: 2em;
		margin-bottom: 20rpx;
	}
</style>
