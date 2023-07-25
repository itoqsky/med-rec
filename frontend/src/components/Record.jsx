import { Card, CardContent, IconButton, Typography, Grid, Box } from '@mui/material';
import React from 'react';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { grey } from '@mui/material/colors';
import moment from 'moment';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';
import { useNavigate } from 'react-router-dom';

const Record = ({ record }) => {
  const [cid, name, patientId, doctorId, timestamp] = record;
  const navigate = useNavigate();

  return (
    <Card style={{ borderRadius: 10, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <DescriptionRoundedIcon style={{ fontSize: 40, color: grey[700] }} />
          </Grid>
          <Grid item xs={3}>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h6' color='white' style={{ fontWeight: 'bold' }}>
                Record name
              </Typography>
              <Typography variant='h6'>{name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h6' color='white' style={{ fontWeight: 'bold' }}>
                Doctor
              </Typography>
              <Typography variant='body1' style={{ wordWrap: 'break-word', color: 'white' }}>
                {doctorId}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h6' color='white' style={{ fontWeight: 'bold' }}>
                Created time
              </Typography>
              <Typography variant='h6'>{moment.unix(timestamp).format('MM-DD-YYYY HH:mm')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <a href={`https://med-chain.infura-ipfs.io/ipfs/${cid}`} target='_blank' rel='noopener noreferrer'>
              <IconButton>
                <CloudDownloadRoundedIcon fontSize='large' />
              </IconButton>
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Record;