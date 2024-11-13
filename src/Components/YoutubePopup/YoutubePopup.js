import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const YouTubePopup = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="YouTube Video Modal"
      style={{
        content: {
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '80%',
          padding: '0',
          borderRadius: '8px',
        },
      }}
    >
      <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
};

export default YouTubePopup;
