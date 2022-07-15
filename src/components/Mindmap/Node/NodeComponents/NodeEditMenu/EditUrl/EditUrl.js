import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useEffect, useRef, useState } from 'react';

function EditUrl(props) {
  const [tempUrl, setTempUrl] = useState(props.url);
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row',
        position: 'absolute',
        zIndex: '1200',
        top: '-40px',
        left: '0px',
        background: 'grey',
        alignItems: 'center',
      }}
    >
      <span>
        <strong>Url:</strong>
      </span>
      <Input value={tempUrl} ref={inputReference} onChange={(e) => setTempUrl(e.target.value)} />
      <Button
        sx={{ background: 'lightblue', ':hover': { background: 'lightblue' } }}
        onClick={() => props.editUrl(props.id, tempUrl)}
      >
        update
      </Button>
    </Box>
  );
}

export default EditUrl;
{
  /* <Box
sx={{
	display: 'flex',
	flexFlow: 'row',
	position: 'absolute',
	zIndex: '1200',
	top: '-40px',
	left: '0px',
	background: 'grey',
	alignItems: 'center',
}}
onClick={() => setClicked(true)}
>
{clicked && (
	<>
		<span>
			<strong>Url:</strong>
		</span>
		<Input value={props.url} ref={inputReference} />
		<Button sx={{ background: 'lightblue', ':hover': { background: 'lightblue' } }}>update</Button>
	</>
)}
</Box> */
}
