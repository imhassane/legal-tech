const makeSchemaOfMember = (data) => {
    if (data.mem_id) {
        data.id = data.mem_id;
        delete data.mem_id;
    }
    if (data.cre_id) {
        data.id = data.cre_id;
        delete data.cre_id;
    }
    if(data.mem_first_name) {
        data.firstName = data.mem_first_name;
        delete data.mem_first_name;
    }
    if(data.mem_last_name) {
        data.lastName = data.mem_last_name;
        delete data.mem_last_name;
    }
    if(data.mem_avatar) {
        data.avatar = data.mem_avatar;
        delete data.mem_avatar;
    }
    if(data.mem_type) {
        data.type = data.mem_type;
        delete data.mem_type;
    }
    if(data.mem_description) {
        data.description = data.mem_description;
        delete data.mem_description;
    }

    return makeSchemaOfCredentials(data);
};

const makeSchemaOfCredentials = (data) => {
    data.credentials = {};
    if(data.cre_id) {
        data.credentials.id = data.cre_id;
        delete data.cre_id;
    }
    if(data.cre_email) {
        data.credentials.email = data.cre_email;
        delete data.cre_email;
    }
    if(data.cre_inserted_at) {
        data.credentials.insertedAt = data.cre_inserted_at;
        delete data.cre_inserted_at;
    }
    if(data.cre_updated_at) {
        data.credentials.updatedAt = data.cre_updated_at;
        delete data.cre_updated_at;
    }
    if(data.cre_status) {
        data.credentials.status = data.cre_status;
        delete data.cre_status;
    }
    return data;
};

module.exports = {
    makeSchemaOfMember,
    makeSchemaOfCredentials
};
