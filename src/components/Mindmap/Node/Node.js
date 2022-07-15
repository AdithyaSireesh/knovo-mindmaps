import React from 'react';
import classes from './Node.module.css';
// import Box from '@mui/material/Box';
import { nodeColorMap } from './nodeColorMap';
// import TextField from '@mui/material/TextField';
import { Handle, Position } from 'react-flow-renderer';
import Container from '@mui/material/Container';
import ChildIcon from './NodeComponents/Icons/ChildIcon/ChildIcon';
import SiblingIcon from './NodeComponents/Icons/SiblingIcon/SiblingIcon';
import Box from '@mui/material/Box';
import NodeEditMenu from './NodeComponents/NodeEditMenu/NodeEditMenu';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
function Node(props) {
  console.log(props.data.url?.includes('http') ? `${props.data.url}` : `//${props.data.url}`);
  return (
    <div className={classes.Node}>
      <Handle type="target" position={Position.Left} />
      {props.selected && (
        <NodeEditMenu url={props.data.url} editUrl={props.data.editUrl} id={props.id} description={props.data.text} />
      )}
      <div className={classes.Row}>
        <Container
          component="span"
          sx={{
            p: 1,
            boxShadow: 3,
            borderRadius: 1,
            background: 'white',
            ':focus': {
              outline: `0px solid transparent`,
            },
            border: `${props.selected ? '5' : '1'}px solid ${nodeColorMap[props.data.layer]}`,
            cursor: 'default',
          }}
          contentEditable={props.selected}
          suppressContentEditableWarning={true}
        >
          {props.data.text}
        </Container>
        {props.data.url?.length !== 0 && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.data.url?.includes('http') ? `${props.data.url}` : `//${props.data.url}`}
            style={{ color: 'black', zIndex: '1200px', position: 'absolute', top: '0px', left: '1px' }}
          >
            <InsertLinkIcon
              sx={{
                ':hover': {
                  color: 'blue',
                },
                cursor: 'pointer',
              }}
            />
          </a>
        )}
        <Handle type="source" position={Position.Right} />
        {props.selected && props.data.layer < 2 && (
          <div className={classes.Child}>
            <ChildIcon createChild={() => props.data.createNode(props.id, props.data.layer, props.xPos, props.yPos)} />
          </div>
        )}
      </div>
      <div className={classes.Sibling}>
        {props.selected && props.data.layer > 0 && (
          <SiblingIcon
            createSibling={() =>
              props.data.createNode(props.data.parentId, props.data.layer - 1, props.xPos, props.yPos)
            }
          />
        )}
        {/* props.createChild(props.id, props.data.layer, props.Posx, props.Posy)} */}
      </div>
    </div>
  );
}

export default Node;
