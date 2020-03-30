# Running e2e tests
## Preparing environment file
Create cypress.env.json with following content providing correct values:
```
{
  "auth_url": "<authenticate_url>",
  "auth_client_id": "<client_id>",
  "auth_username": "<username>",
  "auth_password": "<password>",
  "credential_type": "password"
}
```
## Run locally
Install dependencies with `yarn` and run 
```
yarn test
```
### Run with Chrome only
```
yarn test:chrome
```
### Run with Firefox only
```
yarn test:firefox
```
## Run with Docker
You don't need to checkout this repository in order to test with Docker.
Simply run
```
docker run --rm -it -v <absolute_path_to>/cypress.env.json:/e2e/cypress.env.json -v reports:/e2e/mochawesome-report hellared/qa-test-task
```