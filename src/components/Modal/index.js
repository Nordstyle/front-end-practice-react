import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Modal(props) {
  const { handlerAddUser, handlerModalToggle, modalIsOpen } = props;
  return (
    <Dialog
      open={modalIsOpen}
      onClose={() => handlerModalToggle(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add user</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="FirstName"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="surName"
          label="SurName"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="group"
          label="Group"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handlerModalToggle(false)} color="primary">
          Close
        </Button>
        <Button onClick={() => handlerAddUser({ firstName: 'HELLO' })} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;