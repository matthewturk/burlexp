import { writable, type Writable } from 'svelte/store';

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

export type NodeData = {
  flowState: Writable<FlowState>;
  label: string;
};
