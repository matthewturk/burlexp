<script lang="ts">
	import { writable } from 'svelte/store'
	import {
		SvelteFlow,
		useSvelteFlow,
	} from '@xyflow/svelte';

	import { colorpicker } from '$lib/nodes/colorpick'

	import '@xyflow/svelte/dist/style.css'

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
</script>
<div style="height:100;">
	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		fitView
		attributionPosition="top-right"
	/>
</div>
