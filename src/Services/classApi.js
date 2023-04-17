import InstanceAxios from "../Configuration/InstanceAxios";

function findAll(page = 0) {
    return InstanceAxios
        .get("/classes?page=" + page)
        .then(response => response.data);
}

function findBySchool(id) {
    return InstanceAxios
        .get("/classes/school/" + id)
        .then(response => response.data);
}

function find(id) {
    return InstanceAxios
        .get("/classes/" + id)
        .then(response => response.data);
}

function create(classroom) {
    return InstanceAxios
        .post("/classes", classroom)
        .then(response => response.data);
}

function update(id, classroom) {
    return InstanceAxios
        .put("/classes/" + id, classroom)
        .then(response => response.data);
}

function deleteClass(id) {
    return InstanceAxios
        .delete("/classes/" + id)
        .then(response => response.data);
}

function searchClasses(search) {
    return InstanceAxios
        .get("/classes?search=" + search)
        .then(response => response.data.content);
}

export default {
    findAll,
    findBySchool,
    find,
    create,
    update,
    delete: deleteClass,
    search: searchClasses
}