import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

const UserOwnDocument = () => {
  return (
    <div className='own_doc'>
        <h1>Hujjatlar</h1>
        <div className='own-doc-row'>
 
 
 <div className='own_doc_card'>
<h4>Bakalavr ballari-2205.file</h4>
     <div className=' own-doc-icon'>

                                      <span >
                                        <FaTrashAlt />
                                      </span>
                                    </div>
 </div>

 <div className='own_doc_card'>
<h4>Bakalavr ballari-2205.file</h4>
     <div className=' own-doc-icon'>
                                      <span >
                                        <FaTrashAlt />
                                      </span>
                                    </div>
 </div>

 </div>
    </div>
  )
}

export default UserOwnDocument
