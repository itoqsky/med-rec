import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import { Box, Chip, IconButton, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useAlert from '../../contexts/AlertContext/useAlert';

const AddRecordModal = ({ handleClose, handleUpload, patientAddress }) => {
  const { setAlert } = useAlert();
  const [file, setFile] = useState(null);
  const [buffer, setBuffer] = useState(null);

  const handleFileChange = fileObj => {
    const { file } = fileObj;
    setBuffer(null);
    setFile(file);
    console.log('file.name :>> ', file.name);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const buffer = Buffer.from(reader.result);
      setBuffer(buffer);
    };
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw', // fixed typo: weight should be width
        backgroundColor: 'black', // Set the background color of the whole component to black
      }}
    >
      <Box
        width='50vw'
        style={{
          backgroundColor: '#1e1e1e', // Dark background color for the content area
          boxShadow: 24,
          borderRadius: 10,
        }}
        p={2}
        pr={6}
        pb={0}
        position='relative'
      >
        <Box position='absolute' sx={{ top: 5, right: 5 }}>
          <IconButton onClick={() => handleClose()}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Box display='flex' flexDirection='column' my={1}>
          <Typography variant='h4'>Add Record</Typography>
          <Box my={2}>
            <DropzoneAreaBase
              onAdd={fileObjs => handleFileChange(fileObjs[0])}
              onDelete={fileObj => {
                setFile(null);
                setBuffer(null);
              }}
              onAlert={(message, variant) => setAlert(message, variant)}
              // Add a class name to style the Dropzone
              classes={{
                root: 'dark-dropzone',
              }}
            />
          </Box>
          <Box display='flex' justifyContent='space-between' mb={2}>
            {file && <Chip label={file.name} onDelete={() => setFile(null)} style={{ fontSize: '12px' }} />}
            <Box flexGrow={1} />
            <CustomButton
              text='upload'
              handleClick={() => handleUpload(buffer, file.name, patientAddress)}
              disabled={!file || !buffer}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddRecordModal;
