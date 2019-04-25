import React from 'react';
import Button from '@material-ui/core/Button';

function SimpleButton(props) {
  const { caption, handlerModalToggle } = props;
  return (
    <Button variant="contained"
            color="primary"
            onClick={() => handlerModalToggle(true)}>
      { caption ? caption : 'Add user'}
    </Button>
  )
}

export default SimpleButton;