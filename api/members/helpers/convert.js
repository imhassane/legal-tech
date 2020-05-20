const makeSchemaOfMember = (data) => {
    let result = {};
    if(data.mem_id)
        result.id = data.mem_id;
    if(data.mem_first_name)
        result.firstName = data.mem_first_name;
    if(data.mem_last_name)
        result.lastName = data.mem_last_name;
    if(data.mem_avatar)
        result.avatar = data.mem_avatar;
    if(data.mem_type)
        result.type = data.mem_type;
    if(data.mem_description)
        result.description = data.mem_description;
    if(data.permissions)
        result.permissions = data.permissions;

    return makeSchemaOfCredentials(result);
};

const makeSchemaOfCredentials = (data) => {
    if(data.cre_id)
        data.id = data.cre_id;
    if(data.cre_email)
        data.email = data.cre_email;
    if(data.cre_inserted_at)
        data.insertedAt = data.cre_inserted_at;
    if(data.cre_updated_at)
        data.updatedAt = data.cre_updated_at;
    return data;
};

module.exports = {
    makeSchemaOfMember,
    makeSchemaOfCredentials
};
