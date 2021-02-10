import {useState} from "react";

// Import icons svg //
import IconPublic from "../../assets/svg/icon-public";

// Import organisms //
import PublishRealestate from "../organisms/Publish-realestate";


export default function PublishButton({showIcon = false}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}
                    className="flex text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                {
                    showIcon &&
                    <IconPublic color="#52525b" size={22}/>
                }
                <span className="ml-1">Publicar propiedad</span>
            </button>
            <PublishRealestate showModal={showModal} setShowModal={setShowModal}/>
        </>

    )
}