import axios from "axios";

axios.create({
    headers: {'Access-Control-Allow-Origin': '*'},
    responseType: 'json',
});

const baseUrl = "http://localhost:9000";

function findAll(page = 0) {
    return axios
        .get(baseUrl + "/students?page=" + page)
        .then(response => response.data.content);
}

function find(id) {
    return axios
        .get(baseUrl + "/students/" + id)
        .then(response => response.data.content);
}

function create(student) {
    return axios
        .post(baseUrl + "/students", student)
        .then(response => response.data.content);
}

function update(id, student) {
    return axios
        .put(baseUrl + "/students/" + id, student)
        .then(response => response.data.content);
}

function deleteStudent(id) {
    return axios
        .delete(baseUrl + "/students/" + id)
        .then(response => response.data.content);
}

function searchStudents(search) {
    return axios
        .get(baseUrl + "/students?search=" + search)
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