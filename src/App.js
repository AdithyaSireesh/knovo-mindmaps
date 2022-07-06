import { useCallback, useEffect, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import TextNode from './components/Node/TextNode/TextNode';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [{ id: 'node-1', type: 'textNode', position: { x: 0, y: 0 }, data: { text: 123 } }];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textNode: TextNode };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);
  const onConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  useEffect(() => {
    setNodes(
      nodes.map((node) => ({
        ...node,
        data: { text: node.data.text, setNodeText: setNodeText },
      }))
    );
  }, []);

  const setNodeText = (nodeId, nodeText) => {
    setNodes(
      nodes.map((node) => (node.id === nodeId ? { ...node, data: { text: nodeText, setNodeText: setNodeText } } : node))
    );
  };

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
        nodesDraggable={false}
      />
    </div>
  );
}

export default Flow;
