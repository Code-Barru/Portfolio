import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json?.();
	return {
		latestPost: posts[0],
		posts: posts.slice(1)
	};
}
