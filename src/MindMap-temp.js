// import { useCallback, useEffect, useState } from 'react';
// import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, MarkerType } from 'react-flow-renderer';

// import TextNode from './components/Node/TextNode/TextNode';
// import { Popover } from '@mui/material';

// const rfStyle = {
//   backgroundColor: '#B8CEFF',
// };

// const initialNodes = [
//   { id: 'node-1', type: 'textNode', position: { x: 0, y: 0 }, data: { text: 123 } },
//   {
//     id: '2',
//     type: 'textNode',
//     data: {
//       text: 'node 2',
//     },
//     position: { x: 250, y: 0 },
//   },
//   {
//     id: '3',
//     data: {
//       label: (
//         <>
//           This one has a <strong>custom style</strong>
//         </>
//       ),
//     },
//     position: { x: 400, y: 100 },
//     style: {
//       background: '#D6D5E6',
//       color: '#333',
//       border: '1px solid #222138',
//       width: 180,
//     },
//   },
//   {
//     id: '4',
//     position: { x: 250, y: 200 },
//     data: {
//       label: 'Another default node',
//     },
//   },
//   {
//     id: '5',
//     data: {
//       label: 'Node id: 5',
//     },
//     position: { x: 250, y: 325 },
//   },
//   {
//     id: '6',
//     type: 'output',
//     data: {
//       text: 'asdas',
//     },
//     position: { x: 100, y: 480 },
//   },
//   {
//     id: '7',
//     type: 'output',
//     data: { label: 'Another output node' },
//     position: { x: 400, y: 450 },
//   },
// ];

// const initialEdges = [
//   {
//     id: 'e1-2',
//     source: 'node-1',
//     target: '2',
//     sourceHandle: 'node-1-r',
//     tagetHandle: '2-l',
//     label: 'this is an edge label',
//   },
//   {
//     id: 'e3-4',
//     source: '3',
//     target: '4',
//     animated: true,
//     label: 'animated edge',
//   },
//   {
//     id: 'e4-5',
//     source: '4',
//     target: '5',
//     label: 'edge with arrow head',
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },
//   {
//     id: 'e5-6',
//     source: '5',
//     target: '6',
//     type: 'smoothstep',
//     label: 'smooth step edge',
//   },
//   {
//     id: 'e5-7',
//     source: '5',
//     target: '7',
//     type: 'step',
//     style: { stroke: '#f6ab6c' },
//     label: 'a step edge',
//     animated: true,
//     labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
//   },
// ];
// // we define the nodeTypes outside of the component to prevent re-renderings
// // you could also use useMemo inside the component
// const nodeTypes = { textNode: TextNode };

// function MindMap() {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [currentSelectedNode, setCurrentSelectedNode] = useState(null);

//   const handleNodeClick = (event, node) => {
//     console.log('node click evemt', event, node);
//     setAnchorEl(event.currentTarget);
//     setCurrentSelectedNode(node);
//   };

//   const handleOptionsClose = () => {
//     setAnchorEl(null);
//     setCurrentSelectedNode(null);
//   };
//   console.log('anchorel', anchorEl);

//   const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
//   const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);
//   const onConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

//   useEffect(() => {
//     setNodes(
//       nodes.map((node) => ({
//         ...node,
//         data: { text: node.data.text, setNodeText: setNodeText, url: '' },
//       }))
//     );
//   }, []);

//   // console.log(edges);
//   const setNodeText = (nodeId, nodeText) => {
//     setNodes(nodes.map((node) => (node.id === nodeId ? { ...node, data: { ...node.data, text: nodeText } } : node)));
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;
//   return (
//     <div style={{ height: 500 }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onNodeClick={(e, node) => handleNodeClick(e, node)}
//         onNodeDoubleClick={() => console.log('node double clicked')}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//         style={rfStyle}
//         nodesDraggable={false}
//       />
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleOptionsClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//       >
//         <div style={{ display: 'flex', flexFlow: 'column' }}>
//           <div style={{ display: 'flex', flexFlow: 'row', padding: '10px' }}>
//             <div style={{ marginRight: '5px' }}>Node Text</div>
//             <input
//               value={currentSelectedNode ? currentSelectedNode.data.text : ''}
//               onChange={(e) => setNodeText(currentSelectedNode.id, e.target.value)}
//             />
//           </div>
//           <div style={{ display: 'flex', flexFlow: 'row', padding: '10px' }}>
//             <div style={{ marginRight: '5px' }}>Url</div>
//             <input />
//           </div>
//           <div style={{ display: 'flex', flexFlow: 'row', padding: '10px' }}>
//             <div style={{ marginRight: '5px' }}>Description</div>
//             <textarea />
//           </div>
//         </div>
//       </Popover>
//     </div>
//   );
// }

// export default MindMap;
