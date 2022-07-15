import Box from '@mui/material/Box';
import React from 'react';
import EditTextIcon from '../Icons/EditTextIcon/EditTextIcon';
import IconSeperator from '../Icons/IconSeperator/IconSeperator';
import UrlIcon from '../Icons/UrlIcon/UrlIcon';

function NodeEditMenu(props) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '-50px',
        left: '0px',
        width: '300px',
        height: '40px',
        zIndex: '1200',
        background: '031109',
        cursor: 'default',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: 3,
      }}
    >
      <UrlIcon editUrl={props.editUrl} url={props.url} id={props.id} />
      <IconSeperator />
      <EditTextIcon description={props.description} />
    </Box>
  );
}

export default NodeEditMenu;
