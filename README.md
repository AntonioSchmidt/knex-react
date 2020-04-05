## Running the project

To run the backend `cd server && yarn install && yarn start`

To run the frontend `cd front && yarn install && yarn start`

## Folder structure

#### Front

Where all the React and frontend code is.
The shared folder is where all the most used components would be.
The Product folder would be the 'screen itself', generally I put under a screen/page folder.

#### Commons

Folder where things would be shared between backend and frontend (e.g.: error codes, some minor validations)

#### Server 

Right now it has only one folder under src which is the `product`, there all the things related to the product itself.


## Techs

Front end was generated with create-react-app, it was also added material-ui for speeding up purposes and styled-components.
It uses apollo graphql to send and receive data.
Backend uses knex + objectionjs for database communication and for simplicity the SQLITE is being used as database.


