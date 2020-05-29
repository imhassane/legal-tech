# Lawyers API

This service just extends the member schema from the member API. <br />
It adds the `prefecture` and `sermonDate` for each lawyer. It also adds two new mutations
to the member schema for adding and updating the lawyers informations.

```graphql
extend type Member @key(fields: "id") {
    id: ID! @external
    prefecture: String!
    sermonDate: DateTime!
}
```

##### Adding and updates
To add or update these informations, you either need to be the lawyer in person or need to have the required
permissions. For now, the permission required is the `SUPREME` permission. <br />
Maybe I'll add specific permissions in the future for adding and updating lawyers informations. <br />

###### Future implementations
- [ ] Permissions for Adding a new lawyer
- [ ] Permissions for updating a lawyer

###### Current implementation flaws
I need to add a unique key in the database for the lawyer informations but it works for now
as before adding the informations, I verify that there is no other other account
int the database with the same id.
(<strong>Yep! Not a big problem</strong>) :) :)