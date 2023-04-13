function SchoolPage() {
    const schools = [{"id":1,"name":"École maternelle Les Petits Lapins","city":"Paris","type":"maternelle"},{"id":2,"name":"École primaire Jean Jaurès","city":"Lyon","type":"primaire"},{"id":3,"name":"Collège Jules Verne","city":"Marseille","type":"collège"},{"id":4,"name":"Lycée Victor Hugo","city":"Toulouse","type":"lycée"},{"id":5,"name":"École maternelle Les P'tits Loups","city":"Lille","type":"maternelle"}]
    return (
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    {schools.map((school) => {
        return(
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
export default SchoolPage