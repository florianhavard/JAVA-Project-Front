import GenericTable from "../../Table/GenericTable";
import {useEffect, useState} from "react";
import studentApi from "../../../Services/studentApi";

function StudentPage() {
    const [students, setStudents] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await studentApi.findAll();
                setStudents(data);
                setColumns(Object.keys(data[0]).map(key => ({name: key, key: key})));
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchStudents();
    }, []);

    function handleEdit(id) {
        console.log(`Edit school ${id}`);
    }

    async function handleDelete(id) {
        try {
            await studentApi.delete(id);
            const newStudents = students.filter(s => s.id !== id);
            setStudents(newStudents);
        } catch (error) {
            console.error(error.response);
        }
    }

    return <GenericTable data={students} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />;
}
export default StudentPage