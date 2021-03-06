// Import icons svg //
import IconPublic from "../../assets/svg/icon-public";

// Import molecules //
import Form from "../molecules/Form";
import Modal from "../molecules/Modal";


/**
 * -- PROPS ENTRIES --
 * @showModal prop Boolean
 * @setShowModal prop FunctionState
 * @return PublishRealestate
 */
export default function PublishRealestate({showModal, setShowModal}) {

    const arrFields = [
        {name: "inpu0", placeholder: "Titulo aviso", type: "text"},
        {
            name: "inpu1", placeholder: "Tipo de inmueble", type: "select",
            options: ["Apartamento", "Casa", "Finca", "Local"]
        },
        {name: "inpu2", placeholder: "Barrio", type: "text"},
        {
            name: "inpu6", placeholder: "Municipio", type: "select",
            options: ["Medellin", "Envigado", "Sabaneta", "Itagui", "Bello", "Copacabana", "La estrella", "Caldas", "Girardota", "Barbosa"]
        },
        {name: "inpu3", placeholder: "Precio del arriendo/Mensual", type: "number"},
        {name: "inpu4", placeholder: "Correo electronico", type: "email"},
        {name: "inpu5", placeholder: "Numero celular", type: "tel"},
    ]

    const onSubmit = (out) => {
        console.log(out)
        setShowModal(false)
    }

    return (
        <>
            <Modal
                title="Publicar propiedad"
                body="Publica tu propiedad en tan solo 1 minuto"
                svg={<IconPublic/>}
                showModal={showModal}
                setShowModal={setShowModal}
            >

                <Form
                    arrFields={arrFields}
                    fSumbmit={onSubmit}
                    textBtn="Publicar"
                />
            </Modal>
        </>
    );
}

