<div
	class="shopcred-dashboard-page__after-component"
	v-if="visible"
>
	<div class="shopcred-dashboard-page__banners">
		<shopcred-dashboard-banner
			v-for="( banner, index ) in bannersList"
			:key="index"
			:config="banner"
		></shopcred-dashboard-banner>
	</div>
</div>
