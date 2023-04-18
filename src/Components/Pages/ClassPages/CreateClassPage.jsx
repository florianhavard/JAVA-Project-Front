import GenericForm from '../../GenericForm/GenericForm';
import schoolApi from "../../../Services/schoolApi";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import classApi from "../../../Services/classApi";

const initialValues = {
    name: '',
    level: '',
    schoolId: '',
};

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Le nom est requis';
    }

    if (!values.level) {
        errors.level = 'Le niveau est requis';
    }

    if (!values.schoolId) {
        errors.schoolId = 'L\'école est requise';
    }

    return errors;
};

export default function CreateClassPage(){
    const [schools, setSchools] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const data = await schoolApi.findAll();
                setSchools(data.content);
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchSchools();
    }, []);

    useEffect(() => {
        const options = schools.map(school => {
            return { value: school.id, label: school.name };
        });
        setSelectOptions(options);
    }, [schools]);

    const onSubmit = async (formData) => {
        try {
            let createdSchool = await classApi.create(formData);
            navigate('/classes');
        } catch (error) {
            console.error(error);
        }
    };

    const labels = [
        {
            controlId: 'formName',
            label: 'Nom',
            name: 'name',
            type: 'text',
        },
        {
            controlId: 'formLevel',
            label: 'Niveau',
            name: 'level',
            type: 'text',
        },
        {
            controlId: 'formSchoolId',
            label: 'École',
            name: 'schoolId',
            type: 'select',
            options: selectOptions,
        },
    ];

    return (
        <div className="page-container">
            <h2 className="text-center">Créer une classe</h2>
            <GenericForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isEditMode={false}
                labels={labels}
                validate={validate}
                selectOptions={selectOptions}
            />
        </div>
    );
};
