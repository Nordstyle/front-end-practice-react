import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Modal(props) {
  const { handlerAddUser, handlerModalToggle, modalIsOpen } = props;

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const surName = form.surName.value;
    const group = form.group.value;
    const age = form.age.value;
    handlerAddUser({ _id:firstName, firstName, surName, group, age })
  };

  return (
    <Dialog
      open={modalIsOpen}
      onClose={() => handlerModalToggle(false)}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add user</DialogTitle>
      <form onSubmit={(e) => submitHandler(e)}>
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
            autoFocus
            margin="dense"
            id="age"
            label="Age"
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
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default Modal;