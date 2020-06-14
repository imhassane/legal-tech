# API

The api is based on `graphql` and `apollo-federation`. The entrypoint is located in
the `gateway` directory and is calling all the other microservices. <br />

##### TODO

- [x] Members
    - [x] Authentication
    - [x] Permissions
    - [x] Adding permissions
    - [x] Removing permissions
    - [x] Members(type: "LAWYER")
- [ ] Lawyers
    - [x] Getting prefecture and sermonDate
    - [x] Adding lawyers informations
    - [x] Updating lawyers informations
- [ ] Articles
    - [x] Adding articles
    - [x] List of articles / Details
    - [x] Update an article
    - [x] Approve the article
    - [x] Update an article type
    - [x] Delete an article
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
    - [x] Adding company's contact
- [ ] Education
    - [x] Adding a formation for a member
    - [x] Displaying member's formations
    - [ ] Updating a formation
    - [ ] Deleting a formation
- [ ] Companies
    - [x] Adding a company
    - [x] Company members
    - [x] Member's companies
    - [x] Companies list
    - [ ] Updating a company
    - [ ] Deleting a company (Not sure If I want to do this one yet)
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

