<script lang="ts">
	import { writable } from 'svelte/store'
	import { SvelteFlow, useSvelteFlow } from '@xyflow/svelte'

	import { colorpicker } from '$lib/nodes/colorpick'

	import '@xyflow/svelte/dist/style.css'
	import 'tailwindcss/tailwind.css'

	const nodes = writable([
		{
			id: '1',
			type: 'colorPicker',
			data: { color: writable('#ff4000') },
			position: { x: 0, y: 0 }
		}
	])

	const edges = writable([])

	const nodeTypes = {
		colorPicker: colorpicker
	}
	let width: number
	let height: number
</script>

<div class="w-full h-full" bind:clientWidth={width} bind:clientHeight={height}>
	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		fitView
		attributionPosition="top-right"
		class="bg-surface-500/5 h-full w-full"
	/>
</div>
