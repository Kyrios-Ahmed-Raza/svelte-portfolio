<script lang="ts">
	import { NavLinks } from "../constant";
</script>

<ul
		id="nav_links"
		class="flex space-x-4 text-gray-800 dark:text-neutral-100/70 max-lg:text-sm max-md:hidden"
	>
		{#each NavLinks as link}
			<li class="interactable transition hover:text-slate-950 dark:hover:text-neutral-100/90">
				<a href={link.link}>{link.name}</a>
			</li>
		{/each}
</ul>