<script lang="ts">
    import type { Post } from '$lib/types';
    import { formatDate } from '$lib/utils';


    export let post: Post;
</script>

<a href="post/{post.slug}">
	<li class="post">
		<a href="post/{post.slug}" class="title">{post.title}</a>
		<p class="date">{formatDate(post.date, 'medium')}</p>
		<p class="description">{post.description}</p>
	</li>
</a>



<style>
    .post {
		height: 350px;
		display: block;
		color: inherit;
		font-weight: inherit;
		text-decoration: none;
		transition: all .2s ease-in-out; 
		margin: 15px;
		padding: 8px;
		background: var(--gradient);
		border: 1px solid var(--border);
		border-radius: 15px;
		z-index: -1;
	}

	 .post:hover {
		transform: scale(1.05);
		background: var(--gradient-hover);
		border: 5px solid var(--brand);
		transition: ease 0.3s;
		z-index: 1;
		
	}
	
	.title {
        color: var(--text-2);
		font-size: var(--font-size-fluid-2);
        font-weight: bold;
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
		font-size: var(--font-size-1);
		text-transform: capitalize;
	}

	.description {
		margin-top: var(--size-3);
	}
	a:hover {
		text-decoration: none;
	}
	a p {
		color: var(--text-1);
	}


</style>