import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import schoolApi from "../../../Services/schoolApi";
import classApi from "../../../Services/classApi";
import GenericForm from "../../GenericForm/GenericForm";

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

export default function EditClassPage() {
    const [classroom, setClassroom] = useState(null);
    const [schools, setSchools] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const fetchClassroom = async () => {
            try {
                const data = await classApi.find(id);
                console.log(data);
                setClassroom(data);
            } catch (error) {
                console.error(error.response);
            }
        }
        const fetchSchools = async () => {
            try {
                await fetchClassroom();
                const data = await schoolApi.findAll();
                setSchools(data.content);
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchSchools();
    }, [id]);

    useEffect(() => {
        const options = schools.map(school => {
            return { value: school.id, label: school.name };
        });
        setSelectOptions(options);
    }, [schools]);

    const onSubmit = async (formData) => {
        try {
            let updatedClassroom = await classApi.update(id, formData);
            navigate('/classes')
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
            <h2 className="text-center">Mettre à jour une classe</h2>
            {classroom && (
                <GenericForm
                    initialValues={classroom}
                    onSubmit={onSubmit}
                    isEditMode={true}
                    labels={labels}
                    validate={validate}
                    selectOptions={selectOptions}
                />
            )}
        </div>
    );

}