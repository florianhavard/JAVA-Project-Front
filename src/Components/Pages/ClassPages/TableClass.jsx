function TableClass(props) {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">School</th>
          <th scope="col">Name</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {props.classes.map((classe) => {
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