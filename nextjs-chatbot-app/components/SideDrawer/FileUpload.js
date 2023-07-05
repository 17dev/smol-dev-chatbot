import { useState } from 'react';
import { Button, Input } from 'shadcnUI';
import { FileUpload as FileUploadIcon } from 'phosphorIcons';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileSaved, setIsFileSaved] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    // TODO: Implement file upload logic here
    // You might want to use a service like Vercel KV, AWS S3, or Firebase Storage
    // Depending on the service, you might need to convert the file to a Blob or other format

    setIsFileSaved(true);
  };

  return (
    <div id="fileUpload">
      <h2>File Upload</h2>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleFileUpload}>
        <FileUploadIcon />
        Upload File
      </Button>
      {isFileSaved && <p>File uploaded successfully!</p>}
    </div>
  );
};

export default FileUpload;