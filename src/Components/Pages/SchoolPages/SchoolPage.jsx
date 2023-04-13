import TableSchool from "./TableSchool"

function SchoolPage() {
    const schools = [{"id":1,"name":"École maternelle Les Petits Lapins","city":"Paris","type":"maternelle"},{"id":2,"name":"École primaire Jean Jaurès","city":"Lyon","type":"primaire"},{"id":3,"name":"Collège Jules Verne","city":"Marseille","type":"collège"},{"id":4,"name":"Lycée Victor Hugo","city":"Toulouse","type":"lycée"},{"id":5,"name":"École maternelle Les P'tits Loups","city":"Lille","type":"maternelle"}]
    return (
        <TableSchool schools={schools} />
    )
}
export default SchoolPage