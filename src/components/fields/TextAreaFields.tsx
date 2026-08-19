import { Form } from "react-bootstrap";

type TextAreaFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
};

function TextAreaField({ label, value, onChange, rows = 4 }: TextAreaFieldProps) {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="formLabel">{label}</Form.Label>

            <Form.Control
                className="formInput"
                as="textarea"
                rows={rows}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Group>
    );
}

export default TextAreaField;