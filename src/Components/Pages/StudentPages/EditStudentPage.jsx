import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import studentApi from "../../../Services/studentApi";
import classApi from "../../../Services/classApi";
import GenericForm from "../../GenericForm/GenericForm";

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Le nom est requis';
    }

    if (!values.lastName) {
        errors.lastName = 'Le niveau est requis';
    }

    if (!values.classId) {
        errors.classId = 'L\'école est requise';
    }

    return errors;
}

export default function EditStudentPage() {
    const [student, setStudent] = useState(null);
    const [classrooms, setClassrooms] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const data = await studentApi.find(id);
                setStudent(data);
                return data;
            } catch (error) {
                console.error(error.response);
            }
        }

        const fetchClassrooms = async () => {
            try {
                const acualStudent = await fetchStudent();
                const actualClassroom = await classApi.find(acualStudent.classId);
                const data = await classApi.findBySchool(actualClassroom.schoolId);
                setClassrooms(data);
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchClassrooms();
    }, [id]);

    useEffect(() => {
        const options = classrooms.map(classroom => {
            return { value: classroom.id, label: classroom.name };
        });
        setSelectOptions(options);
    }, [classrooms]);

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
            controlId: 'formClass',
            label: 'Classe',
            type: 'select',
            name: 'classId',
            options: selectOptions,
        }
    ];

    const onSubmit = async (formData) => {
        try {
            await studentApi.update(id, formData);
            navigate('/students');
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <div className="page-container">
            <h2 className="text-center">Mettre à jour une élève</h2>
            {student && (
                <GenericForm
                    initialValues={student}
                    onSubmit={onSubmit}
                    isEditMode={true}
                    labels={labels}
                    validate={validate}
                    selectOptions={selectOptions}
                />
            )}
        </div>
    )
}