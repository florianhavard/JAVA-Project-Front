import InstanceAxios from "../Configuration/InstanceAxios";

function findAll(page = 0) {
    return InstanceAxios
        .get("/schools?page=" + page)
        .then(response => response.data);
}

function find(id) {
    return InstanceAxios
        .get("/schools/" + id)
        .then(response => response.data);
}

function create(school) {
    return InstanceAxios
        .post("/schools", school)
        .then(response => response.data.content);
}

function update(id, school) {
    return InstanceAxios
        .put("/schools/" + id, school)
        .then(response => response.data.content);
}

function deleteSchool(id) {
    return InstanceAxios
        .delete("/schools/" + id)
        .then(response => response.data.content);
}

function searchSchools(search) {
    return InstanceAxios
        .get("/schools?search=" + search)
        .then(response => response.data);
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteSchool,
    search: searchSchools
}