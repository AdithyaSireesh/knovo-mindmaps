import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditTextArea(props) {
  const [tempDescription, setTempDescription] = useState(props.description);
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row',
        zIndex: '1200',
        background: 'white',
        alignItems: 'center',
        position: 'absolute',
        top: '0px',
        right: '-200px',
        display: 'flex',
        flexFlow: 'column',
        boxShadow: 3,
      }}
    >
      <TextField
        id="standard-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        value={tempDescription}
        onChange={(e) => setTempDescription(e.target.value)}
        variant="standard"
        sx={{ width: '200px' }}
      />
      <Button>Update description</Button>
    </Box>
  );
}

export default EditTextArea;
