<script lang="ts">
    import type { Post } from '$lib/types';
    import { formatDate } from '$lib/utils';
    import { ArrowRight } from 'lucide-svelte';

    export let post: Post;

</script>

<div class="card">
    <p class="subtitle">Latest Project</p>
    <p class="title">{post.title}</p>
    <p class="date">{formatDate(post.date, 'medium')}</p>
    <p class="description">{post.description}</p>
    <a href="post/{post.slug}" class="link">Continue to read <ArrowRight /></a>
</div>


<style>
    .card {
        padding: var(--size-2) var(--size-4) var(--size-4) var(--size-10);
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        background: var(--gradient);
        margin-bottom: 3rem;
    }

    .title {
        font-size: var(--font-size-fluid-3);
        color: var(--brand);
        font-weight: bold;
        text-transform: capitalize;
    }

    .date {
        color: var(--text-2);
        text-transform: capitalize;
    }

    .description {
        margin-top: 1rem;
    }

    .link {
        display: flex;
        align-items: center;
        gap: var(--size-2);
        margin-top: 1rem;
        color: var(--brand);
        font-weight: bolder;
        cursor: pointer;
    }

    .link:hover {
        text-decoration: underline;
    }

</style>