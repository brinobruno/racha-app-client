import { Styles } from 'react-modal'

export const modalCustomStyles: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0 ,0, 0.6)',
    zIndex: 100,

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    color: '#202024',
    border: '1px solid #E9EDF5',
    background: '#E9EDF5',

    borderRadius: '5px',
    padding: '1.5rem',
  },
}
