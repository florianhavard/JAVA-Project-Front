function ClassPage() {
  const classes = [{"id":1,"school":{"id":1,"name":"École maternelle Les Petits Lapins","city":"Paris","type":"maternelle"},"name":"Classe de maternelle 1","grade":"petite section"},{"id":2,"school":{"id":2,"name":"École primaire Jean Jaurès","city":"Lyon","type":"primaire"},"name":"Classe de CE1","grade":"CE1"},{"id":3,"school":{"id":3,"name":"Collège Jules Verne","city":"Marseille","type":"collège"},"name":"Classe de 5ème","grade":"5ème"},{"id":4,"school":{"id":4,"name":"Lycée Victor Hugo","city":"Toulouse","type":"lycée"},"name":"Classe de terminale S","grade":"terminale S"},{"id":5,"school":{"id":5,"name":"École maternelle Les P'tits Loups","city":"Lille","type":"maternelle"},"name":"Classe de maternelle 2","grade":"moyenne section"},{"id":6,"school":{"id":1,"name":"École maternelle Les Petits Lapins","city":"Paris","type":"maternelle"},"name":"Classe de maternelle 3","grade":"grande section"},{"id":7,"school":{"id":2,"name":"École primaire Jean Jaurès","city":"Lyon","type":"primaire"},"name":"Classe de CE2","grade":"CE2"},{"id":8,"school":{"id":3,"name":"Collège Jules Verne","city":"Marseille","type":"collège"},"name":"Classe de 4ème","grade":"4ème"},{"id":9,"school":{"id":4,"name":"Lycée Victor Hugo","city":"Toulouse","type":"lycée"},"name":"Classe de première L","grade":"première L"},{"id":10,"school":{"id":5,"name":"École maternelle Les P'tits Loups","city":"Lille","type":"maternelle"},"name":"Classe de maternelle 4","grade":"petite section"},{"id":11,"school":{"id":1,"name":"École maternelle Les Petits Lapins","city":"Paris","type":"maternelle"},"name":"Classe de maternelle 5","grade":"moyenne section"},{"id":12,"school":{"id":2,"name":"École primaire Jean Jaurès","city":"Lyon","type":"primaire"},"name":"Classe de CM2","grade":"CM2"},{"id":13,"school":{"id":3,"name":"Collège Jules Verne","city":"Marseille","type":"collège"},"name":"Classe de 3ème","grade":"3ème"},{"id":14,"school":{"id":4,"name":"Lycée Victor Hugo","city":"Toulouse","type":"lycée"},"name":"Classe de terminale ES","grade":"terminale ES"},{"id":15,"school":{"id":5,"name":"École maternelle Les P'tits Loups","city":"Lille","type":"maternelle"},"name":"Classe de maternelle 6","grade":"grande section"}]
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
        {classes.map((classe) => {
          return  <tr>
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
export default ClassPage