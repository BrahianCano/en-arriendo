import React from 'react';

// Import icons svg //
import IconPublic from "../../assets/svg/icon-public";

// Import molecules //
import Modal from "../molecules/Modal";
import Form from "../molecules/form";


/**
 * -- PROPS ENTRIES --
 * @showModal prop Boolean
 * @setShowModal FunctionState
 * @return PublishEstate
 */
export default function PublishEstate({showModal, setShowModal}) {

    const arrFields = [
        {name: "inpu1", placeholder: "inpu1", type: "text"},
        {name: "inpu2", placeholder: "inpu2", type: "email"},
        {name: "inpu1", placeholder: "inpu1", type: "text"}

    ]
    const onSubmit = (out) => {
        console.log(out)
        setShowModal(false)
    }

    return (
        <>
            <Modal title="Publicar propiedad"
                   svg={<IconPublic/>}
                   showModal={showModal}
                   setShowModal={setShowModal}
            >

                <Form arrFields={arrFields}
                      fSumbmit={onSubmit}
                      textBtn="Publicar"
                />
            </Modal>
        </>
    );
}

