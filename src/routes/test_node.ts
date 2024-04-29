import { writable } from 'svelte/store';
import type { Node, Edge } from '@xyflow/svelte';

export type FlowState = {
  color: string;
  zoom: number;
  shape: string;
};

const flowState = writable<FlowState>({
  color: '#ffffff',
  zoom: 19,
  shape: 'cube'
});

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'colorpicker',
    position: { x: 50, y: 0 },
    data: {
      flowState,
      label: 'shape color'
    },
    class: 'w-[150px]'
  },
  {
    id: '2',
    type: 'slider',
    position: { x: 40, y: 280 },
    data: {
      flowState,
      label: 'zoom level'
    },
    class: 'w-[150px]'
  },
  {
    id: '3',
    type: 'option',
    position: { x: 0, y: 125 },
    data: {
      flowState,
      label: 'shape type'
    },
    class: 'w-[150px]'
  },
];

export const initialEdges: Edge[] = [];