<template>

	<div class="projets">
		<v-row 
			dense 
			align="center"
			justify="center"
		>
			<v-col
				v-for="project in projects"
				:key="project.name"
				:cols="width"
				>
				<v-card
					width="500px"
					class="center"
					color="indigo darken-3"
				>
					<v-img
					:src="project.img"
					class="white--text align-end"
					height="200px"
					> 
						<v-card-title v-text="project.name"></v-card-title>
						<v-card-subtitle> {{project.langage}}<br>{{project.year}}</v-card-subtitle>
					</v-img>
					
					<v-card-actions>

						<v-btn 
							text
							color="white">
								Voir Plus
						</v-btn>

						<v-spacer> </v-spacer>

						<v-btn icon
							:href="project.git"
							target="_blank"
							color="white">
								<v-icon> mdi-github </v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</div>

</template>

<style lang="scss">

.pCard {
	padding: 80px;
}

.projets {
	padding-top: 40px;
	padding-bottom: 40px;
	margin: auto;
	width: 70%;
}

@media screen and (max-width: 960px) {
  .projets {
		width: 100%;
	}
}

</style>

<script>
export default {
	name: "ProjetsComp",

	computed: {
		width(){
				switch (this.$vuetify.breakpoint.name) {
					case 'xs': return '7'
					case 'sm': return '7'
					case 'md': return '4'
					case 'lg': return '4'
					case 'xl': return '4'
					default: return '4'
			}
		}
	},

	data: () => ({
		projects: [
			{
				name: 'Labyrinthe',
				langage: 'C++/SFML',
				description: 'test',
				year: '2021',
				show: false,
				img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
				git: 'https://github.com/Code-Barru/labyrinthe'
			},
			{
				name: 'Code-Bot',
				langage: 'NodeJS/DiscordJS',
				description: 'Bot Discord pouvant tracker ',
				year: '2022',
				show: false,
				img: 'https://repository-images.githubusercontent.com/456235784/49d00860-869e-4288-a9ed-09473acce78c?width=1034&height=517',
				git: 'https://github.com/Code-Barru/Code-Bot'
			},
			{
				name: 'Site Portfolio',
				langage: 'VueJS, Vuetify',
				description: 'test',
				year: '2022',
				show: false,
				img: 'https://repository-images.githubusercontent.com/471491911/8ec843c5-389f-4078-a9b4-60673a84cf92',
				git: 'https://github.com/Code-Barru/Portfolio'
			},
		]
	}),
}
</script>