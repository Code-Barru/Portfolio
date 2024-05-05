<script lang="ts">
	import * as config from '$lib/config';

	import Post from '../components/post.svelte';
	import LatestPost from '../components/latestPost.svelte';
	
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<LatestPost post={data.latestPost} />
	<h3>Other Projects</h3>
	<ul class="posts">
		
		{#each data.posts as post}
			<Post post={post} />
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--spacing-24);
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		margin-top: var(--spacing-32);
	}

</style>
