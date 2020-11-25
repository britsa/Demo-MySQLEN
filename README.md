# Demo-MySQLEN App 1.0.0

This demo Express app developed in Nodejs performs CRUD operations with the help of MSQL database. This v1.0.0 of the service has 3 exposed APIs which are documented as below.

## Prerequisite

Download your suitable MySQL Community [edition](http://https://dev.mysql.com/downloads/ "edition") setup (Linux/ Windows/ MacOS). Install the setup on your system Configure your system for root user with password. Once completed you can verify your installation from console.

### For windows

1. Try using the following command in cmd.

```bash
	mysql -u root -p
```

2. If any command unrecognized error persist, then set your MYSQL_HOME environment variable with value of your installed location. (Eg: C:\Program Files\MySQL\MySQL Server 8.0\bin).
3. If still not worked, try using the following command on your cmd.

```bash
	set path=%PATH%;C:\Program Files\MySQL\MySQL Server 8.0\bin;
```

## Connection Parameters

**URL** : http://localhost:3000/

## Default API
### /
#### GET

#### Success Response

**Code** : `200 OK`

```json
{
	"message": "Welcome to Britsa application."
}
```

#### Failure Response

**Code** : `400 BAD REQUEST`

Any mismatch in the request pattern will return the following response.

```json
{
	"message": "<error_message>"
}
```

----

## Customer API
### /customers
#### GET

#### Success Response

**Code** : `200 OK`

```json
[
	{
		"id": "int",
		"email": "string",
		"name": "string",
		"active": "int"
	}
]
```

#### Failure Response

**Code** : `400 BAD REQUEST`

Any mismatch in the request pattern will return the following response.

```json
{
	"message": "<error_message>"
}
```

#### POST

**Body**

| Parameter | Value type | Usage |
| :------------: | :------------: | :------------: |
| email | string | Required |
| name | string | Required |
| active | boolean | Required |


#### Success Response

**Code** : `200 OK`

```json
{
	"id": "int",
	"email": "string",
	"name": "string",
	"active": "boolean"
}
```

#### Failure Response

**Code** : `400 BAD REQUEST`

Any mismatch in the request pattern will return the following response.

```json
{
	"message": "<error_message>"
}
```

## Common Exceptions

Some common exception might occur while our app try to connect to the MySQL database. Kindly refer to the following references for quick resolution.

**ER_NOT_SUPPORTED_AUTH_MODE** : https://stackoverflow.com/questions/52815608/er-not-supported-auth-mode-client-does-not-support-authentication-protocol-requ

**Cannot enqueue Query after invoking quit** : https://stackoverflow.com/questions/58681908/error-cannot-enqueue-query-after-invoking-quit-in-mysql-with-nodejs



## Author

***Maria Irudaya Regilan J*** ([@Regilan]("https://github.com/Regilan")) developed this code with public interest. Mail him for any feedback or suggestion at **britsa.tech@gmail.com** *(Include his name in the subject of the mail)*.

## License
[MIT](https://choosealicense.com/licenses/mit/)