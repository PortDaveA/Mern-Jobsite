import React, { useState } from 'react';
import ReactModal from 'react-modal';
import InPutForm from '../component/InPutForm';

// Make sure to set app element before using ReactModal
ReactModal.setAppElement('#root');
import './Jobs.css';

const ApplicationFormModal = ({ handleClose = () => {} }) => (
  <div className="job-modal">
    <button className="modal-close-button" onClick={handleClose}>X</button>

    <InPutForm handleClose={handleClose} />
  </div>
);

const SoftwareEngineerModal = ({ handleClose, handleApplyForm }) => (
  <div className="job-modal">
    <h2>Software Engineer</h2>
    
    <p className="job-modal-p">
      Software engineers design, develop, test, and maintain software
      applications. They work with product managers and other stakeholders to
      gather requirements and define solutions. Software engineers also develop
      and implement software solutions using best practices and design patterns.
    </p>
    <button onClick={handleApplyForm}>Apply</button>
    <button className="modal-close-button" onClick={handleClose}>
      X
    </button>
  </div>
);

const DataScientistModal = ({ handleClose, handleApplyForm }) => (
  <div className="job-modal">
    <h2>Data Scientist</h2>
    <button className="modal-close-button" onClick={handleClose}>
      X
    </button>
    <p>
      Data scientists collect, clean, and analyze data to extract meaningful
      insights. They use their insights to solve real-world problems and make
      better decisions. Data scientists use a variety of tools and techniques,
      including machine learning, statistics, and data visualization.
    </p>
    <button onClick={handleApplyForm}>Apply</button>
  </div>
);

const WebDeveloperModal = ({ handleClose, handleApplyForm }) => (
  <div className="job-modal">
    <h2>Web Developer</h2>
    <button className="modal-close-button" onClick={handleClose}>
      X
    </button>
    <p>
      Web developers build and maintain websites and web applications. They use a
      variety of programming languages and technologies, such as HTML, CSS,
      JavaScript, and PHP. Web developers also work with back-end developers to
      create and maintain the servers that power websites and web applications.
    </p>
    <button onClick={handleApplyForm}>Apply</button>
  </div>
);

const Jobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  const handleOpen = (job) => {
    setIsOpen(true);
    setJob(job);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApplyForm = () => {
    setShowFormModal(true);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
  };

  return (
    <div className="jobs">
      <h2>Jobs</h2>
      <div className="job-notice-grid">
        <div className="job-notice-box">
          <h3>Software Engineer</h3>
          <p>Google</p>
          <button onClick={() => handleOpen('software-engineer')}>
            More info.
          </button>
        </div>

        <div className="job-notice-box">
          <h3>Data Scientist</h3>
          <p>Facebook</p>
          <button onClick={() => handleOpen('data-scientist')}>
            More info.
          </button>
        </div>

        <div className="job-notice-box">
          <h3>Web Developer</h3>
          <p>Amazon</p>
          <button onClick={() => handleOpen('web-developer')}>More info.</button>
        </div>
      </div>

      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={handleClose}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid black',
              overflowY: 'auto',
              maxWidth: '80vw',
            },
          }}
        >
          {job === 'software-engineer' && (
            <SoftwareEngineerModal
              handleClose={handleClose}
              handleApplyForm={handleApplyForm}
            />
          )}
          {job === 'data-scientist' && (
            <DataScientistModal
              handleClose={handleClose}
              handleApplyForm={handleApplyForm}
            />
          )}
          {job === 'web-developer' && (
            <WebDeveloperModal
              handleClose={handleClose}
              handleApplyForm={handleApplyForm}
            />
          )}
        </ReactModal>
      )}

      {showFormModal && (
        <ReactModal
          isOpen={showFormModal}
          onRequestClose={handleCloseFormModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid black',
              overflowY: 'auto',
              maxWidth: '80vw',
            },
          }}
        >
          <ApplicationFormModal handleClose={handleCloseFormModal} />
        </ReactModal>
      )}
    </div>
  );
};

export default Jobs;

