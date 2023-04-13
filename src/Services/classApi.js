import InstanceAxios from "../Configuration/InstanceAxios";

function findAll(page = 0) {
    return InstanceAxios
        .get("/classes?page=" + page)
        .then(response => response.data.content);
}

function find(id) {
    return InstanceAxios
        .get("/classes/" + id)
        .then(response => response.data.content);
}

function create(classroom) {
    return InstanceAxios
        .post("/classes", classroom)
        .then(response => response.data.content);
}

function update(id, classroom) {
    return InstanceAxios
        .put("/classes/" + id, classroom)
        .then(response => response.data.content);
}

function deleteClass(id) {
    return InstanceAxios
        .delete("/classes/" + id)
        .then(response => response.data.content);
}

function searchClasses(search) {
    return InstanceAxios
        .get("/classes?search=" + search)
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