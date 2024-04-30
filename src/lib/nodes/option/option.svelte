<script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
    import NodeWrapper from '../nodewrapper.svelte';
    import type { NodeData } from '../defaultstate';
  
    type $$Props = NodeProps;
    export let data: NodeData;
    $$restProps;
    const { label, flowState } = data;
  
    let selectedShape = $flowState.shape;
    let options = $flowState.options;
    $: {
      $flowState.shape = selectedShape;
      $flowState.options = options;
    }
  </script>
  
  <NodeWrapper {label}>
    <Handle type="source" position={Position.Right} />
    <div class="flex flex-col nodrag">
      {#each options as option}
        <label class="flex">
          <input
            bind:group={selectedShape}
            class="accent-[#ff4000]"
            type="radio"
            value={option}
            checked={selectedShape === option}
          />
          <span class="ml-2">{option}</span>
        </label>
      {/each}
    </div>
  </NodeWrapper>
