<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	//workspace section
	import { SvelteFlowProvider } from '@xyflow/svelte';
	import Workspace from './workspace.svelte';
</script>

<div class="container">
	<SvelteFlowProvider>
		<Workspace />
	</SvelteFlowProvider>
</div>


<style lang="postcss">
	.container {
		justify-content: center;
		align-items: center; 
		height: 90vh;
		margin-left: auto; 
		margin-right: auto;
		max-width: 1600px;
	}
</style>
