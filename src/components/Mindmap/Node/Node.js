import React from 'react';
import classes from './Node.module.css';
import Box from '@mui/material/Box';
import { nodeColorMap } from './nodeColorMap';
import TextField from '@mui/material/TextField';
function Node(props) {
  return (
    <Box
      component="span"
      sx={{
        p: 1,
        border: `${props.selected ? '5' : '1'}px solid ${nodeColorMap[props.data.layer]}`,
        boxShadow: 3,
        borderRadius: 1,
        background: 'white',
        ':focus': {
          outline: `0px solid transparent`,
        },
      }}
      contentEditable={true}
    >
      {props.data.text}
    </Box>
  );
}

export default Node;
