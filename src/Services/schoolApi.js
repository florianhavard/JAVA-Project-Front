import axios from "axios";

axios.create({
    headers: {'Access-Control-Allow-Origin': '*'},
    responseType: 'json',
});

const baseUrl = "http://localhost:9000";

function findAll(page = 0) {
    return axios
        .get(baseUrl + "/schools?page=" + page)
        .then(response => response.data.content);
}

function find(id) {
    return axios
        .get(baseUrl + "http://localhost:9000/schools/" + id)
        .then(response => response.data.content);
}

function create(school) {
    return axios
        .post(baseUrl + "/schools", school)
        .then(response => response.data.content);
}

function update(id, school) {
    return axios
        .put(baseUrl + "/schools/" + id, school)
        .then(response => response.data.content);
}

function deleteSchool(id) {
    return axios
        .delete(baseUrl + "/schools/" + id)
        .then(response => response.data.content);
}

function searchSchools(search) {
    return axios
        .get(baseUrl + "/schools?search=" + search)
        .then(response => response.data.content);
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteSchool,
    search: searchSchools
}