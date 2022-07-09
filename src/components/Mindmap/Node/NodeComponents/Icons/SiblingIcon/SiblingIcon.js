import React from 'react';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import Box from '@mui/material/Box';

function SiblingIcon(props) {
  return (
    <Box
      sx={{
        borderRadius: '100%',
        zIndex: '1002',
        backgroundColor: 'pink',
        cursor: 'pointer',
        ':hover': {
          border: 'medium solid red',
        },
      }}
      onClick={props.createSibling}
    >
      <ForkRightIcon />
    </Box>
  );
}

export default SiblingIcon;
