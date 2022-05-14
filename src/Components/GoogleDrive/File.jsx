import React from 'react'

export default function File({ file }) {
    return (
        <a
            href={file.url}
            target="_blank"
            className="btn btn-outline-dark text-truncate w-100"
        >
            {/* <FontAwesomeIcon icon={faFile} className="mr-2" /> */}
            {file.name}
        </a>
    )
}
