import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState } from 'react-flow-renderer';

import { nodes as initialNodes, edges as initialEdges, edgeType, edgeAnimated } from './exampleMap2';
import classes from './Mindmap.module.css';
import ChildIcon from './Node/NodeComponents/Icons/ChildIcon/ChildIcon';
import { nodeTypes } from './Node/nodeConstants';
import Popover from '@mui/material/Popover';
import { nodeColorMap } from './Node/nodeColorMap';
import { makeid } from './helpers/generalHelpers';
import dagre from 'dagre';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const nodeWidth = 700;
const nodeHeight = 36;
const getLayoutedElements = (nodes, edges, direction = 'LR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);

const Mindmap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [showUpdateSuccessAlert, setShowUpdateSuccessAlert] = useState(false);

  const handleCloseUpdateSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowUpdateSuccessAlert(false);
  };

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  useEffect(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges, direction);
      // console.log('use effect layouted nodes', layoutedNodes, nodes);
      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes.length]
  );

  const handleCreateNode = (parentId, parentLayer, nodePosx, nodePosy) => {
    console.log('handle create node');
    const makeId = makeid(5);
    const newId = `${parentId}-${makeId}`;
    console.log(newId);
    const newNode = {
      id: newId,
      type: 'textNode',
      data: {
        parentId: parentId,
        label: (
          <>
            Welcome to <strong>React Flow!</strong>
          </>
        ),
        text: `Newly created child for ${parentId}`,
        layer: parentLayer + 1,
        url: 'www.google.com',
        description: "this is the child node's description",
        createNode: handleCreateNode,
        editUrl: handleUpdateNode,
      },
      position: { x: 0, y: 0 },
    };

    const newEdge = {
      id: `e${parentId}-${newId}`,
      source: `${parentId}`,
      target: `${newId}`,
      type: edgeType,
      animated: edgeAnimated,
      label: 'this is an edge label',
      style: { stroke: 'blue' },
    };
    setNodes((nds) => nds.concat(newNode));
    setEdges((eds) => eds.concat(newEdge));
  };

  useEffect(() => {
    console.log('useeffect set nodes add functions');
    setNodes(
      nodes.map((node) => ({
        ...node,
        data: { ...node.data, createNode: handleCreateNode, editUrl: handleUpdateNode },
      }))
    );
  }, []);

  const handleUpdateNode = (nodeId, url) => {
    setNodes(
      layoutedNodes.map((node) => {
        return node.id === nodeId
          ? {
              ...node,
              data: { ...node.data, url: url, createNode: handleCreateNode, editUrl: handleUpdateNode },
            }
          : {
              ...node,
              data: { ...node.data, createNode: handleCreateNode, editUrl: handleUpdateNode },
            };
      })
    );
    setShowUpdateSuccessAlert(true);
  };
  console.log(nodes);

  return (
    <div className={classes.Mindmap}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodesDraggable={false}
        nodeTypes={nodeTypes}
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            return nodeColorMap[n.data.layer || 0];
          }}
          nodeColor={(n) => {
            return nodeColorMap[n.data.layer || 0];
          }}
          nodeBorderRadius={2}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
        <Snackbar open={showUpdateSuccessAlert} autoHideDuration={6000} onClose={handleCloseUpdateSuccess}>
          <Alert onClose={handleCloseUpdateSuccess} severity="success" sx={{ width: '100%' }}>
            Node url update successfully
          </Alert>
        </Snackbar>
      </ReactFlow>
    </div>
  );
};

export default Mindmap;
