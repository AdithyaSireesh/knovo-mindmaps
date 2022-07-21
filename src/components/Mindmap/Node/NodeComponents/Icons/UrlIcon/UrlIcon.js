import React, { useState } from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Box from '@mui/material/Box';
import EditUrl from '../../NodeEditMenu/EditUrl/EditUrl';

function UrlIcon(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <Box
      sx={{
        borderRadius: '100%',
        zIndex: '1002',
        backgroundColor: 'pink',
        cursor: 'pointer',
        border: clicked ? 'medium solid blue' : '',
        ':hover': {
          border: 'medium solid blue',
        },
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => setClicked(true)}
    >
      <InsertLinkIcon />
      {clicked && <EditUrl url={props.url} editUrl={props.editUrl} id={props.id} />}
    </Box>
  );
}

export default UrlIcon;
