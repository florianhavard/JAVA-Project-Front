import InstanceAxios from "../Configuration/InstanceAxios";

function findAll(page = 0) {
    return InstanceAxios
        .get("/students?page=" + page)
        .then(response => response.data);
}

function find(id) {
    return InstanceAxios
        .get("/students/" + id)
        .then(response => response.data);
}

function create(student) {
    return InstanceAxios
        .post("/students", student)
        .then(response => response.data.content);
}

function update(id, student) {
    console.log(id, student)
    return InstanceAxios
        .put("/students/" + id, student)
        .then(response => response.data.content);
}

function deleteStudent(id) {
    return InstanceAxios
        .delete("/students/" + id)
        .then(response => response.data.content);
}

function searchStudents(search) {
    return InstanceAxios
        .get("/students?search=" + search)
        .then(response => response.data.content);
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteStudent,
    search: searchStudents
}