import React, { useState } from 'react';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Box from '@mui/material/Box';
import EditTextArea from '../../NodeEditMenu/EditTextArea/EditTextArea';

function EditTextIcon(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <Box
      sx={{
        borderRadius: '100%',
        zIndex: '1002',
        backgroundColor: 'pink',
        cursor: 'pointer',
        ':hover': {
          border: 'medium solid blue',
        },
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => setClicked(true)}
    >
      <TextSnippetIcon />
      {clicked && <EditTextArea description={props.description} />}
    </Box>
  );
}

export default EditTextIcon;
