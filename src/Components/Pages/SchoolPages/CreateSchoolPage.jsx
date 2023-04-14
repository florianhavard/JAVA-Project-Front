import React from 'react';
import GenericForm from '../../GenericForm/GenericForm';
import schoolApi from "../../../Services/schoolApi";

const labels = [
    {
        controlId: 'formName',
        label: 'Nom',
        name: 'name',
        type: 'text',
    },
    {
        controlId: 'formCity',
        label: 'Ville',
        name: 'city',
        type: 'text',
    },
    {
        controlId: 'formType',
        label: 'Type',
        name: 'type',
        type: 'text',
    },
];

const initialValues = {
    name: '',
    city: '',
    type: '',
};

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Le nom est requis';
    }

    if (!values.city) {
        errors.city = 'La ville est requise';
    }

    if (!values.type) {
        errors.type = 'Le type est requis';
    }

    return errors;
};

export default function CreateSchoolPage(){
    const onSubmit = async (formData) => {
        try {
            let createdSchool = await schoolApi.create(formData);
            console.log('School created: ', createdSchool);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="page-container">
            <h2 className="text-center">Créer jour une école</h2>
            <GenericForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isEditMode={false}
                labels={labels}
                validate={validate}
            />
        </div>
    );
};

