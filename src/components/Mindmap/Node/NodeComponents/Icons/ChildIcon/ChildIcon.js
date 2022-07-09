import React from 'react';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Box from '@mui/material/Box';

function ChildIcon(props) {
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
      onClick={props.createChild}
    >
      <ChildCareIcon />
    </Box>
  );
}

export default ChildIcon;
