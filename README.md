# ChatterBox API. 
ChatterBox is an app that keeps you and your friends in touch. Login with your name and enter the room where you can send messages that are instantly updated on your screen every time a message is sent.

![CHAT IN USE](https://media.giphy.com/media/BoXYY0aLATz2pDcrqf/giphy.gif)

[Front-end repository](https://github.com/JeffKersting/chatterBox)

## SETUP

### 1. Getting started with Postgres (skip this step if you already have postgres on your machine)
Run the following commands in terminal. 

```SQL
brew install postgresql
brew services start postgresql
psql postgres
CREATE ROLE <username>
ALTER ROLE <username> CREATEDB
\q
psql -d postgres -U <username>
CREATE DATABASE chatterbox;`
```

### 2. Create the chatterbox database (Skip this step if you have completed step one)
If postgres is not running, either start using the Postgres GUI (recommended), or run the following in terminal:
```SQL
  pg_ctl -D /usr/local/var/postgres start
```
Next, create the database
```SQL
  CREATE DATABASE chatterbox;
```


### 3. Clone this repository. 
`cd chatterBox-api`

`npm install`


### 4. Initializing and run the database. 
Run the following commands in terminal. 
```
knex migrate:latest
knex seed:run
nodemon index
```

Now you should be ready to access the site on the frontend! Find the frontend repo [here](https://github.com/JeffKersting/chatterBox).

## Technologies Used
<ul>
  <li>Express</li> 
  <li>Postgres</li> 
  <li>Knex</li> 
  <li>Socket.io</li> 
  <li>CORS</li> 
  <li>Nodemon</li>   
</ul>

## Contributing
<table>
  <tr>
    <td> Max Bregman <a href="https://github.com/Max9545">GH</td>
    <td> Jeff Kersting <a href="https://github.com/JeffKersting">GH</td>
  </tr>
<td><img src="https://avatars.githubusercontent.com/u/67295227?s=460&u=ad5787c63676987806b88f2bf84a34b45a5a5e98&v=4" alt="Mr. Bregman"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/69732297?s=460&u=00030864e625ff24c4d8f902473b89e6f0c450ac&v=4" alt="Mr.Kersting"
 width="150" height="auto" /></td>
</table>

## License [MIT](https://choosealicense.com/licenses/mit/)
