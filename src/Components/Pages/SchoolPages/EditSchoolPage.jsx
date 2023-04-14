import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import schoolApi from "../../../Services/schoolApi";
import GenericForm from '../../GenericForm/GenericForm';

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
}

export default function EditSchoolPage() {
    const [school, setSchool] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSchool = async () => {
            try {
                const data = await schoolApi.find(id);
                setSchool(data);
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchSchool();
    }, [id]);

    const onSubmit = async (formData) => {
        try {
            let updatedSchool = await schoolApi.update(id, formData);
            navigate('/schools')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="page-container">
            <h2 className="text-center">Mettre à jour une école</h2>
            {school && (
                <GenericForm
                    initialValues={school}
                    onSubmit={onSubmit}
                    isEditMode={true}
                    labels={labels}
                    validate={validate}
                />
            )}
        </div>
    );
}