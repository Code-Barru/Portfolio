<template>
	
	<div class="home">
		<v-parallax
			dark
			src="https://wallup.net/wp-content/uploads/2016/01/89275-space-stars-artwork.jpg"
			height="850"
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					align="center"
					justify="center"
					color="secondary"
				>
					<h2 class="name">Antoine<strong> OUSSELIN</strong></h2>
					<h4>Étudiant en Informatique </h4>
				</v-col>
			</v-row>
		</v-parallax>
	</div>
</template>


<style lang="scss">
.home {
	.name {
		font-size: 100px;
		text-shadow: 1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, -1px 0 0 black;
		strong {
			color: #427aa1;
		}
	}
	h4 {
		font-size: 60px;
		text-shadow: 1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, -1px 0 0 black;
	}
}

@media screen and (max-width: 800px) {
  .home {
		.name {
			font-size: 80px;
		}

		h4 {
			font-size: 45px;
		}
	}
}
</style>