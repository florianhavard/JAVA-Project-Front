import GenericTable from '../../Table/GenericTable';
import {useEffect, useState} from "react";
import schoolApi from "../../../Services/schoolApi";

function SchoolPage() {
    const [schools, setSchools] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const data = await schoolApi.findAll();
                setSchools(data);
                setColumns(Object.keys(data[0]).map(key => ({name: key, key: key})));
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchSchools();
    }, []);

    function handleEdit(id) {
        console.log(`Edit school ${id}`);
    }

    async function handleDelete(id) {
        try {
            await schoolApi.delete(id);
            const newSchools = schools.filter(s => s.id !== id);
            setSchools(newSchools);
        } catch (error) {
            console.error(error.response);
        }
    }

    return (
        <GenericTable
            columns={columns}
            data={schools}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
}

export default SchoolPage;
