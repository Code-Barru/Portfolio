<template>
	<v-app>
		<v-main>
			<HomeComp/>
			<ProjetsComp/>
		</v-main>
	</v-app>
</template>

<script>
import HomeComp from './components/HomeComp';
import ProjetsComp from './components/ProjectsComp.vue'

export default {
	name: 'App',

	components: {
		HomeComp,
		ProjetsComp
	},

	data: () => ({
		//
	}),
};
</script>