import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../Button';

interface DropzoneProps {
  files: any[];
  noClick: boolean;
  noKeyboard: boolean;
  maxFiles: number;
  maxSize: number;
  accept: any;
  onDrop: (_: any[], rejections: any[]) => void;
  onFileRemove: () => void;
}

const Dropzone: React.FC<DropzoneProps> = ({
  files, noClick, noKeyboard, maxFiles, maxSize, accept, onDrop, onFileRemove,
}) => {
  const {
    getRootProps, getInputProps, open,
  } = useDropzone({
    noClick,
    noKeyboard,
    maxFiles,
    accept,
    maxSize,
    onDrop,
  });

  let content;
  if (files.length > 0) {
    content = (
      <div className="file-name-container">
        <img
          src={files[0].preview}
          className="img-preview"
          alt="File Preview"
          onLoad={() => { URL.revokeObjectURL(files[0].preview); }}
        />
        <CancelIcon className="cancel-icon" onClick={onFileRemove} />
      </div>
    );
  } else {
    content = (
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p className="text">
          Drag and drop
          {' '}
          <br />
          {' '}
          your logo here
        </p>
        <label className="text">or</label>
        <Button className="drop-btn" text="Browse Logo" variant="primary" onClick={open} />

        <p className="validation-text" />
      </div>
    );
  }

  return (
    <div className="d-dropzone">
      <div className="dropzone-main">
        {content}
      </div>
    </div>
  );
};

export default Dropzone;
