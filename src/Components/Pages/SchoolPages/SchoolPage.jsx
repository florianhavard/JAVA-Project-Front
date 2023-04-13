import React from 'react';
import GenericTable from '../../Table/GenericTable';

function SchoolPage() {
    const schools = [
        {
            id: 1,
            name: 'École maternelle Les Petits Lapins',
            city: 'Paris',
            type: 'maternelle',
        },
        {
            id: 2,
            name: 'École primaire Jean Jaurès',
            city: 'Lyon',
            type: 'primaire',
        },
        {
            id: 3,
            name: 'Collège Jules Verne',
            city: 'Marseille',
            type: 'collège',
        },
        {
            id: 4,
            name: 'Lycée Victor Hugo',
            city: 'Toulouse',
            type: 'lycée',
        },
        {
            id: 5,
            name: "École maternelle Les P'tits Loups",
            city: 'Lille',
            type: 'maternelle',
        },
    ];

    const columns = [
        { name: '#', key: 'id' },
        { name: 'Name', key: 'name' },
        { name: 'City', key: 'city' },
        { name: 'Type', key: 'type' },
    ];

    function handleEdit(id) {
        console.log(`Edit school ${id}`);
    }

    function handleDelete(id) {
        console.log(`Delete school ${id}`);
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
