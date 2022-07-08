import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const nodes = [
  {
    id: 'root',
    type: 'input',
    data: {
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
    position: { x: 250, y: 250 },
  },
  {
    id: '2',
    data: {
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
    position: { x: 400, y: 150 },
  },
  {
    id: '3',
    data: {
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
    position: { x: 400, y: 350 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 180,
    },
  },
  {
    id: '4',
    position: { x: 100, y: 150 },
    data: {
      label: 'Another default node',
      layer: 1,
      text: 'Another default node',
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
  },
  {
    id: '5',
    data: {
      label: 'Node id: 5',
      layer: 1,
      text: 'Node id: 5',
      url: 'www.knovo.me',
      description: "this is the node's description",
    },
    position: { x: 100, y: 350 },
  },
  {
    id: '6',
    type: 'output',
    data: {
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
    position: { x: 600, y: 250 },
  },
  {
    id: '7',
    type: 'output',
    data: {
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
    position: { x: 0, y: 250 },
  },
];

export const edges = [
  { id: 'eroot-2', source: 'root', target: '2', type: 'smoothstep', label: 'this is an edge label' },
  { id: 'eroot-3', source: 'root', target: '3', type: 'smoothstep' },
  {
    id: 'eroot-4',
    source: 'root',
    target: '4',
    animated: true,
    type: 'smoothstep',
    label: 'animated edge',
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
  },
  {
    id: 'eroot-6',
    source: 'root',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
  },
  {
    id: 'eroot-7',
    source: 'root',
    target: '7',
    type: 'smoothstep',
    label: 'smooth step edge',
  },
];
