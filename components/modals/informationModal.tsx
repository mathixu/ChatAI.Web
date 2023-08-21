import Modal from "@/components/modals/modal";

interface InformationModalProps {
    title: string
    message?: string;
    onClose: () => void;
}

export default function InformationModal({title, message, onClose}: InformationModalProps) {
    return (
        <Modal>
            <h2 className={"text-2xl font-bold text-center mb-8"}>{title}</h2>
            {message && <p>{message}</p>}
            <div className="modal-action">
                <button className="btn btn-ghost" type="button" onClick={onClose}>Close</button>
            </div>
        </Modal>
    )
}