import { Form } from "react-bootstrap";

type InputFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
};

function InputField({ label, value, onChange, type = "text", }: InputFieldProps) {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="formLabel">{label}</Form.Label>

            <Form.Control
                className="formInput"
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Group>
    );
}

export default InputField;