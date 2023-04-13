function TableStudent(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Class</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                </tr>
            </thead>
            <tbody>
                {props.students.map((Student) => {
                    return <tr>
                        <th scope="row" key={Student.id}>{Student.id}</th>
                        <td>{Student.classe.name}</td>
                        <td>{Student.firstname}</td>
                        <td>{Student.lastname}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default TableStudent