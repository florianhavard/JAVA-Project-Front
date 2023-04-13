function TableSchool(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Type</th>
                </tr>
            </thead>
            <tbody>
                {props.schools.map((school) => {
                    return (
                        <tr>
                            <th scope="row" key={school.id}>{school.id}</th>
                            <td>{school.name}</td>
                            <td>{school.city}</td>
                            <td>{school.type}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}
export default TableSchool