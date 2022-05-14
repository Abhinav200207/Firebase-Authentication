import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import NavbarComponent from './Navbar'
import { useFolder } from "../../useFolder"
import Folder from "./Folder"
import File from "./File"
import { useParams, useNavigate } from "react-router-dom"
import FolderBreadcrumbs from './BreadCrumbs'
import AddFileButton from './AddFileButton'


export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useNavigate();
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder);
  // console.log(folder);

  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        <AddFileButton currentFolder={folder} />
        <FolderBreadcrumbs currentFolder={folder} />
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

