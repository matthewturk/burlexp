import { writable, type Writable } from 'svelte/store';
import type { Node, Edge } from '@xyflow/svelte';

export type FlowState = {
  color: string;
  zoom: number;
  shape: string;
};

const flowState = writable<FlowState>({
  color: '#ff4000',
  zoom: 17,
  shape: 'cube'
});

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 0 },
    data: {
      flowState,
      label: 'shape color'
    },
    class: 'w-[150px]'
  },
];

export const initialEdges: Edge[] = [];