function TableClass(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">School</th>
          <th scope="col">Name</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {props.classes.map((classe) => {
          console.log(classe.id)
          return <tr>
            <th scope="row" key={classe.id}>{classe.id}</th>
            <td>{classe.school.name}</td>
            <td>{classe.name}</td>
            <td>{classe.grade}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}
export default TableClass