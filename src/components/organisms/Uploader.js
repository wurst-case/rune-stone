import React from 'react'
import { map } from 'lodash'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import { useDropzone } from 'react-dropzone'

// Path within Database for metadata (also used for file Storage path)
const filesPath = 'uploadedFiles'

export default function Uploader() {
  const firebase = useFirebase()
  const uploadedFiles = useSelector(({ firebase: { data } }) => data[filesPath])

  function onFilesDrop(files) {
    return firebase.uploadFiles(filesPath, files, filesPath)
  }
  function onFileDelete(file, key) {
    return firebase.deleteFile(file.fullPath, `${filesPath}/${key}`)
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div>
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
      <button onClick={(_) => onFilesDrop(files)}>Upload</button>
      {uploadedFiles && (
        <div>
          <h3>Uploaded file(s):</h3>
          {map(uploadedFiles, (file, key) => (
            <div key={file.name + key}>
              <span>{file.name}</span>
              <button onClick={() => onFileDelete(file, key)}>Delete File</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
