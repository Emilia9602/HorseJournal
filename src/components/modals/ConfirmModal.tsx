import { Button, Modal } from "react-bootstrap";

type ConfirmModalProps = {
    show: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

function ConfirmModal({
    show, title, message, onConfirm, onCancel,
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
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal;