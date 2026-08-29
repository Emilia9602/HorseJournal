import { Button, Modal } from "react-bootstrap";

type ModalType = "confirm" | "info";

type ConfirmModalProps = {
    show: boolean;
    title: string;
    message: string;
    type: ModalType;
    onConfirm?: () => void;
    onCancel: () => void;
};

function ConfirmModal({
    show, title, message, type, onConfirm, onCancel,
}: ConfirmModalProps) {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title className="journalTitle">{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-center">
                <p>{message}</p>
            </Modal.Body>

            <Modal.Footer>
                {type === "confirm" ? (
                    <>
                        <Button
                            className="journalBtnSend"
                            onClick={onCancel}>
                            Avbryt
                        </Button>

                        <Button
                            className="journalBtnSend"
                            onClick={onConfirm}>
                            Bekräfta
                        </Button>
                    </>
                ) : (
                    <Button
                        className="journalBtnSend"
                        onClick={onCancel}>
                        OK
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal;