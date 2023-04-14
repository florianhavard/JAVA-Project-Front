import {useEffect, useState} from "react";
import classApi from "../../../Services/classApi";
import GenericForm from "../../GenericForm/GenericForm";
import studentApi from "../../../Services/studentApi";
import {useNavigate} from "react-router-dom";

const initialValues = {
    firstName: '',
    lastName: '',
    classId: '',
};

const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Le prénom est requis';
    }

    if (!values.lastName) {
        errors.lastName = 'Le nom est requis';
    }

    if (!values.classId) {
        errors.classId = 'La classe est requise';
    }

    return errors;
}

export default function CreateStudentPage() {
    const [classes, setClasses] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await classApi.findAll();
                setClasses(data);
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchClasses();
    }, []);

    useEffect(() => {
        const options = classes.map(classroom => {
            return { value: classroom.id, label: classroom.name };
        });
        setSelectOptions(options);
    }, [classes]);

    const onSubmit = async (formData) => {
        try {
            let createdStudent = await studentApi.create(formData);
            navigate('/students');
        } catch (error) {
            console.error(error);
        }
    }

    const labels = [
        {
            controlId: 'formFirstName',
            label: 'Prénom',
            type: 'text',
            name: 'firstName',
        },
        {
            controlId: 'formLastName',
            label: 'Nom',
            type: 'text',
            name: 'lastName',
        },
        {
            controlId: 'formClassId',
            label: 'Classe',
            type: 'select',
            name: 'classId',
            options: selectOptions,
        }
    ];

    return (
        <div className="page-container">
            <h2 className="text-center">Créer un élève</h2>
            <GenericForm
                initialValues={initialValues}
                labels={labels}
                isEditMode={false}
                onSubmit={onSubmit}
                validate={validate}
                selectOptions={selectOptions}
            />
        </div>
    );
}