```javascript
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_FILE } from '../../utils/queries';
import { Button } from '@radix-ui/react-button';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadFile, { loading, error }] = useMutation(UPLOAD_FILE, {
    onCompleted: () => setFile(null),
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    await uploadFile({ variables: { file } });
  };

  return (
    <div id="fileUpload" className="p-4">
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={loading}>
        Upload
      </Button>
      {loading && <p>Uploading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default FileUpload;
```