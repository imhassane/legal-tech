# API

The api is based on `graphql` and `apollo-federation`. The entrypoint is located in
the `gateway` directory and is calling all the other microservices. <br />

##### TODO

- [x] Members
    - [x] Authentication
    - [x] Permissions
    - [x] Adding permissions
    - [x] Removing permissions
- [ ] Lawyers
    - [x] Getting prefecture and sermonDate
    - [x] Adding lawyers informations
    - [x] Updating lawyers informations
- [ ] Articles
    - [ ] CRUD on articles
    - [ ] CRUD on comments
- [ ] Domains
    - [x] Adding a new domain
    - [x] Adding a domain for a lawyer
    - [x] Getting lawyer's domain
    - [ ] Getting the domain's article
- [ ] Laws
    - [ ] CRUD on laws
- [ ] Contacts
    - [x] Displaying member's contact
    - [x] Adding member's contact
    - [ ] Adding company's contact
- [ ] Education
    - [x] Adding a formation for a member
    - [x] Displaying member's formations
    - [ ] Updating a formation
    - [ ] Deleting a formation
- [ ] Companies
    - [ ] CRUD on companies
- [ ] Documents
    - [ ] CRUD on documents
- [ ] Videos
    - [ ] CRUD on videos
    
##### Architecture
The gateway is checking if the user is authenticated by decoding the token passed in the headers.
It then verifies if the user is correct and get his permissions. <br />
The permissions and the user's ID will be transfered to the differents microservices for their custom
use. <br />

Each service is totally independant but they are all sharing the same database running on `Postgres`.

