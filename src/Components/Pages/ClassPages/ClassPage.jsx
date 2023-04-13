import React, {useEffect, useState} from 'react';
import GenericTable from '../../Table/GenericTable';
import classApi from "../../../Services/classApi";

function ClassPage() {
    const [classes, setClasses] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await classApi.findAll();
                setClasses(data);
                setColumns(Object.keys(data[0]).map(key => ({name: key, key: key})));
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchClasses();
    }, []);

    function handleEdit(id) {
        console.log(`Edit school ${id}`);
    }

    async function handleDelete(id) {
        try {
            await classApi.delete(id);
            const newClasses = classes.filter(c => c.id !== id);
            setClasses(newClasses);
        } catch (error) {
            console.error(error.response);
        }
    }

    return <GenericTable data={classes} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />;
}

export default ClassPage;
