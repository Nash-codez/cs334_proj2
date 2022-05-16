import React, { useState } from 'react';
import { 
  Typography, 
  Card, 
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  styled,
  Fab,
  Box,
  Stack,
  CardHeader,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Autocomplete,
  IconButton,
  Avatar,
  Input
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

export default function SideBar() {
  const [profPic, setProfPic] = React.useState(null);
  const [groupName, setGroupName] = React.useState('');
  const [cat1, setCat1] = React.useState('');
  const [cat2, setCat2] = React.useState('');
  const [cat3, setCat3] = React.useState('');

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value[0]);
  };

  const handleProfPicChange = (event) => {
    setProfPic(event.target.files[0]);
  };

  const handleCat1Change = (event, value) => {
    setCat1(value.label);
  };

  const handleCat2Change = (event, value) => {
    setCat2(value.label);
  };

  const handleCat3Change = (event, value) => {
    setCat3(value.label);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateGroup = () => {
    const gdata = new FormData();
    gdata.append('prof_pic', profPic);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        group_name: groupName,
        category1: cat1,
        category2: cat2,
        category3: cat3
      })
    };
    fetch('/api/create-group', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='sidebar-wrapper'>
      <Card className='card' raised='true' sx={{ width: '100%', height: '100%' }}>
        <CardHeader
            title="Filters"
            sx={{ pl: 9, pt: 5, pb: 0 }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={5}>
              <FormGroup sx={{ justifySelf: 'center', align: 'center' }}>
                <FormControlLabel control={<BpCheckbox />} label="Label 1" />
                <FormControlLabel control={<BpCheckbox />} label="Label 2" />
                <FormControlLabel control={<BpCheckbox />} label="Label 3" />
                <FormControlLabel control={<BpCheckbox />} label="Label 4" />
                <FormControlLabel control={<BpCheckbox />} label="Label 5" />
                <FormControlLabel control={<BpCheckbox />} label="Label 6" />
                <FormControlLabel control={<BpCheckbox />} label="Label 7" />
              </FormGroup>
              <div>
                <Fab variant="extended" size="medium" color="secondary" aria-label="add" onClick={handleClickOpen}>
                  <AddIcon sx={{ mr: 1 }} />
                  Create Group
                </Fab>
                <Dialog open={open} onClose={handleClose} sx={{ overflowY: 'visible' }}>
                  <DialogTitle>Create A Group</DialogTitle>
                  <DialogContent>
                    <Stack direction='row' spacing={3} sx={{ pb: 1.5 }}>
                      <React.Fragment>
                        <input 
                          accept="image/*"
                          id="group-prof-pic"
                          type="file"
                          style={{ display: 'none' }}
                          onInput={handleProfPicChange}
                        />
                        <label htmlFor="group-prof-pic">
                          <Avatar sx={{ width: 58, height: 58}}>
                            <IconButton aria-label="upload group picture" component="span">
                              <AddPhotoAlternate fontSize='large'/>
                            </IconButton>
                          </Avatar>
                        </label>
                      </React.Fragment>
                      <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        label="Group Name"
                        type="text"
                        variant='standard'
                        color="secondary"
                        size='small'
                        onChange={handleGroupNameChange}
                      />
                    </Stack>
                    <Typography variant='caption'>Please select 3 different categories that best describe your group.</Typography>
                    <Autocomplete
                      disablePortal
                      id="cat-combo-box"
                      options={categories}
                      sx={{ width: '50%', pb: 1}}
                      renderInput={(params) => <TextField {...params} label="Category 1" />}
                      size="small"
                      color='secondary'
                      getOptionLabel={(option) => option.label}
                      onChange={handleCat1Change}
                    />
                    <Autocomplete
                      disablePortal
                      id="cat-combo-box"
                      options={categories}
                      sx={{ width: '50%', pb: 1}}
                      renderInput={(params) => <TextField {...params} label="Category 2" />}
                      size="small"
                      color='secondary'
                      getOptionLabel={(option) => option.label}
                      onChange={handleCat2Change}
                    />
                    <Autocomplete
                      disablePortal
                      id="cat-combo-box"
                      options={categories}
                      sx={{ width: '50%'}}
                      renderInput={(params) => <TextField {...params} label="Category 3" />}
                      size="small"
                      color='secondary'
                      getOptionLabel={(option) => option.label}
                      onChange={handleCat3Change}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancel</Button>
                    <Button onClick={handleCreateGroup} color="secondary">Create</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

//random list of categories
const categories = [
  { label: 'News', id: 1 },
  { label: 'Marvel', id: 2 },
  { label: 'Comedy', id: 3 },
  { label: 'Memes', id: 4 },
  { label: 'Soccer', id: 5 },
  { label: 'Formula 1', id: 6 },
];