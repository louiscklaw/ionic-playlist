import React from 'react';
import Drawer from '@mui/material/Drawer';

export default function BottomDrawer() {
  return (
    <>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        PaperProps={{
          sx: {
            borderRadius: '1rem 1rem 0 0',
          },
        }}
      ></Drawer>
      Bottom Drawer
    </>
  );
}
