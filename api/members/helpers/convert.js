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
    if(data.mem_permissions)
        result.permissions = data.mem_permissions;
    return result;
};

const makeSchemaOfCredentials = (data) => {
    let result = {};
    if(data.cre_id)
        result.id = data.cre_id;
    if(data.cre_email)
        result.email = data.cre_email;
    if(data.cre_inserted_at)
        result.insertedAt = data.cre_inserted_at;
    if(data.cre_updated_at)
        result.updatedAt = data.cre_updated_at;
    return result;
};

module.exports = {
    makeSchemaOfMember,
    makeSchemaOfCredentials
};
