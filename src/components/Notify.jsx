import React from 'react';

const Notify = ({ msg }) => {
  if (!msg) {
    return null;
  }
  return <div style={{ color: 'red', position: "fixed", top: 0, width: '100%' }}>{msg}</div>;
};
export default Notify;
