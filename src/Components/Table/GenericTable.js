function GenericTable(props) {
    const { columns, data, onEdit, onDelete } = props;

    console.log(data)

    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                {columns.map((column) => (
                    <th key={column.key}>{column.name}</th>
                ))}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={column.key}>{row[column.key]}</td>
                    ))}
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={() => onEdit(row.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => onDelete(row.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default GenericTable;
