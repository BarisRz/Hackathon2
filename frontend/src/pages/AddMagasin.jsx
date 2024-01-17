/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import "../scss/addMagasin.scss";
import { useDropzone } from "react-dropzone";

export default function AdminAddBornes() {
  const [file, setFile] = useState({});

  const onDrop = useCallback(
    (acceptedFile) => {
      setFile(acceptedFile[0]);
    },
    [file]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const url = `${import.meta.env.VITE_BACKEND_URL}/api/uploads`;

  function Submit(e) {
    e.preventDefault();
    const formData = new FormData();
    const config = {
      Headers: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("file", file);
    formData.append("fileName", file.name);
    axios.post(url, formData, config).catch((err) => console.error(err));
  }

  return (
    <div className="backgroundImageMain">
      <div className="add_bornes_page">
        <div className="add_bornes_page_container">
          <div className="upload-card">
            <h1>Ajouter des Bornes</h1>
            <div className="upload">
              {isDragActive ? (
                <p className="upload_text">
                  Relacher le fichier pour l'ajouter{" "}
                </p>
              ) : (
                <p className="upload_text">
                  Drag 'n' drop ou Cliquez <br />
                  pour sélectionner un fichier
                </p>
              )}
              <div className="upload_DragDrop" {...getRootProps()}>
                <input {...getInputProps()} />
              </div>
            </div>
            <div className="buttons-container">
              <button
                type="submit"
                className="buttons-container_blue"
                onClick={Submit}
              >
                Charger le CSV
              </button>

              <Link to="/admin">
                <button type="button" className="buttons-container_dark">
                  Annuler
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
