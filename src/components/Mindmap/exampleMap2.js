import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const position = { x: 0, y: 0 };
export const nodes = [
  {
    id: 'root',
    type: 'textNode',
    data: {
      parentId: 'root',
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      ),
      text: 'Welcome to React Flow!',
      layer: 0,
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: position,
  },
  {
    id: '2',
    type: 'textNode',
    data: {
      parentId: 'root',
      label: (
        <>
          This is a <strong>default node</strong>
        </>
      ),
      text: 'This is a default node',
      layer: 1,
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: position,
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '3',
    type: 'textNode',
    data: {
      parentId: 'root',
      label: (
        <>
          This one has a <strong>custom style</strong>
        </>
      ),
      text: 'This one has a <strong>custom style</strong>',
      layer: 1,
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: position,
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '4',
    type: 'textNode',
    position: { x: 100, y: 150 },
    data: {
      parentId: 'root',
      label: 'Another default node',
      layer: 1,
      text: 'Another default node',
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '5',
    type: 'textNode',
    data: {
      parentId: 'root',
      label: 'Node id: 5',
      layer: 1,
      text: 'Node id: 5',
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: position,
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '6',
    type: 'textNode',
    data: {
      parentId: 'root',
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
      text: 'An <strong>output node</strong>',
      layer: 1,
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: position,
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '7',
    type: 'textNode',
    data: {
      parentId: 'root',
      label: (
        <>
          An <strong>output node 2</strong>
        </>
      ),
      text: 'An <strong>output node 2</strong>',
      layer: 1,
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: position,
    sourcePosition: 'right',
    targetPosition: 'left',
  },
];

export const edges = [
  {
    id: 'eroot-2',
    source: 'root',
    target: '2',
    type: 'smoothstep',
    label: 'this is an edge label',
    style: { stroke: 'blue' },
  },
  { id: 'eroot-3', source: 'root', target: '3', type: 'smoothstep', style: { stroke: 'green' } },
  {
    id: 'eroot-4',
    source: 'root',
    target: '4',
    animated: true,
    type: 'smoothstep',
    label: 'animated edge',
    style: { stroke: 'black' },
  },
  {
    id: 'eroot-5',
    source: 'root',
    target: '5',
    label: 'edge with arrow head',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'pink' },
  },
  {
    id: 'eroot-6',
    source: 'root',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
    style: { stroke: 'red' },
  },
  {
    id: 'eroot-7',
    source: 'root',
    target: '7',
    type: 'smoothstep',
    label: 'smooth step edge',
    style: { stroke: 'purple' },
  },
];
