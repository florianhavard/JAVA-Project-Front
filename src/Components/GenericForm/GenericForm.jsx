import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../../CSS/GenericForm.css";

export default function GenericForm({
                                        initialValues,
                                        onSubmit,
                                        isEditMode,
                                        labels,
                                        selectOptions,
                                        validate,
                                    }) {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialValues);
    }, [initialValues]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        console.log(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                {labels.map(({ controlId, label, name, type }, index) => (
                    <Form.Group controlId={controlId} key={index}>
                        <Form.Label>{label}</Form.Label>
                        {type === "select" ? (
                            <Form.Select
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                isInvalid={!!errors[name]}
                            >
                                <option value="">Select an option...</option>
                                {selectOptions.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Form.Select>
                        ) : (
                            <Form.Control
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                isInvalid={!!errors[name]}
                            />
                        )}
                        <Form.Control.Feedback type="invalid">
                            {errors[name]}
                        </Form.Control.Feedback>
                    </Form.Group>
                ))}
                <Button type="submit">
                    {isEditMode ? "Mettre à jour" : "Créer"}
                </Button>
            </Form>
        </div>
    );
};
