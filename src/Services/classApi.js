import axios from "axios";

axios.create({
    headers: {'Access-Control-Allow-Origin': '*'},
    responseType: 'json',
});

const baseUrl = "http://localhost:9000";

function findAll(page = 0) {
    return axios
        .get(baseUrl + "/classes?page=" + page)
        .then(response => response.data.content);
}

function find(id) {
    return axios
        .get(baseUrl + "/classes/" + id)
        .then(response => response.data.content);
}

function create(classroom) {
    return axios
        .post(baseUrl + "/classes", classroom)
        .then(response => response.data.content);
}

function update(id, classroom) {
    return axios
        .put(baseUrl + "/classes/" + id, classroom)
        .then(response => response.data.content);
}

function deleteClass(id) {
    return axios
        .delete(baseUrl + "/classes/" + id)
        .then(response => response.data.content);
}

function searchClasses(search) {
    return axios
        .get(baseUrl + "/classes?search=" + search)
        .then(response => response.data.content);
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteClass,
    search: searchClasses
}