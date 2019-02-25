# FEC-JJAM

>  Development of the frontend of item-view page with basic implementation
>of database deployed on EC2 using Docker containers

## Related Projects

  - https://github.com/hrsf111-fec-jjam/navbar-proxy
  - https://github.com/hrsf111-fec-jjam/itemView-module
  - https://github.com/hrsf111-fec-jjam/popular-module
  - https://github.com/hrsf111-fec-jjam/reviews-module

## Table of Contents

- [Installation]
  - [To run on localhost]
    - [Seed the database]
    - [Set environment variables]
    - [Run the package]
  - [To run in Docker container with host's mysql]
  - [To run database and app in Docker containers]
    - [To run on localhost]
    - [To run on EC2]


## Installation

To use this package clone and run:

```sh
npm install
```

### To run on localhost

#### Seed the database

You will need to have `mysql` installed and configured. To seed it with the
necessary database run:

```sh
npm run db-seed
```

or within `mysql` shell:

```sh
>SOURCE schema.sql;
```

#### Set environment variables

The default environment variables can be found at `.env` file.

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD
DB_DATABASE=navbar
DB_PORT=3306
MY_URL=http://localhost
```

If you are planning to run the package on localhost, change only `DB_USER` and `DB_PASSWORD`.
The absence of value on `DB_PASSWORD` will enable you to access mysql without password if
you don't have one set.

<sub>**Note** The url for the localhost should not have port, colon or slash at the end.
  3001 port is appended automatically with `http://localhost`.</sub>

#### Run the package

```sh
npm start
```

You will notice that before starting `server.js`, webpack is building the  bundle.
This is necessary because this module uses environment variables which are integrated
into `bundle.js` at build time.

You should be able to access this module in your browser at `http://localhost:3001`.

### To run in Docker container with host's mysql

Build and image first. In the root directory run:

```sh
docker build -t user/repo:tag .
```

<sub>**Note** There is no need to change environment variables now. They will be
  set at the time of container creation.</sub>

If you want to run the container on your machine and access your host installation
of mysql, run the following command:

```sh
docker run -ti --network=host -e DB_PASSWORD=<password> -e DB_USER=<root> -p 3001:3001 --name test-app1 user/repo:tag
```

This will allow you app container to access your host mysql with specified user and
password. `--network=host` should create access for app to mysql.

Or you can use `docker-compose.yml` file with the command:

```sh
docker-compose up -d
```
<sub>**Note** The `-d` flag will allow you to attach to a console with `docker container logs -f <container>`
  and exit with `ctrl-c` without stopping container.</sub>

Before running the above command, you should open the `docker-compose.localhost.example.yml` file and set the variables.
Then, save it as `docker-compose.yml`.

### To run database and app in Docker containers

Build the images:

```sh
docker build -t user/repo:app-tag .
```

In `docker-mysql/` :

```sh
docker build -t user/repo:mysql-tag .
```

#### To run on localhost

Open `docker-compose.yml` file and change variables, names and parameters.
In root dir run:

```sh
docker-compose up -d
```

You should be able to access the module in your browser at `http://localhost:3001`.

If the module is not connected to database, stop app container:

```sh
docker stop <container>
```

and restart with:

```sh
docker start <container>
```

#### To run on EC2

Pull the same images created for localhost into VM, modify `docker-compose.yml`
to reflect configuration and specifically URL. Proceed as above.

If you prefer the command line, here are examples to spin-up your containers:
<sub>**Note** you would have to create network first: `docker network create <name>`.</sub>

```sh
docker run -ti --network=my-custom-link -p 3300:3306 --name ref-mysql1 -e MYSQL_ROOT_PASSWORD=password --user=root someone/repo:mysql-tag
```

If user is `root`, no need to specify in app container, otherwise specify `DB_USER`:

```sh
docker run -ti --network=my-custom-link -e DB_PASSWORD=password -e DB_HOST=ref-mysql1 -e "MY_URL=http://ec2-52-87-161-21.compute-1.amazonaws.com" -p 80:3001 --name ref-app1 someone/repo:app-tag
```
<sub>**Note** Here insead of referencing alias when server connects to db as in `.yml` file,
we reference our db by container name.</sub>