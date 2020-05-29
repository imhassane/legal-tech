const convertToSchema = (data) => {
    if(data.dom_id) {
        data.id = data.dom_id;
        delete data.dom_id;
    }
    if(data.dom_name) {
        data.name = data.dom_name;
        delete data.dom_name;
    }
    if(data.dom_description) {
        data.description = data.dom_description;
        delete data.dom_description;
    }
    if(data.dom_inserted_at) {
        data.insertedAt = data.dom_inserted_at;
        delete data.dom_inserted_at;
    }
    if(data.dom_updated_at) {
        data.updatedAt = data.dom_updated_at;
        delete data.dom_updated_at;
    }
    return data;
};

module.exports = { convertToSchema };
