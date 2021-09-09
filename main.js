/****************************************\
* 	@author SpindlesDev (Ryan N)		*
*	@license GPL-v3						*
* 	@date 09/08/2021					*
*	@description A database interface 	*
*	for SpindlesDev projects to easily	*
* 	controlling database data.			*
\****************************************/

const fs = require("fs");
const sequelizeLibrary = require("sequelize");

let configSource					 	= null;
let configDatabaseType			 		= null;
let jsonDatabase 						= null;
let sequelizeInstance 					= null;


exports.init = function (config) {
	const databaseType 					= config.databaseType;
	const databaseName 					= databaseOptions.databaseName;
	const databaseUsername 				= databaseOptions.databaseUsername;
	const databasePassword 				= databaseOptions.databasePassword;
	const databaseHost 					= databaseOptions.databaseHost;
	let databaseOptions 				= null;
	databaseOptions 					= {
		databaseName: databaseName,
		databaseHost: databaseHost,
		databaseUsername: databaseUsername,
		databasePassword: databasePassword,
	};

	switch (configJSONDatabaseType) {
		case json:
		    const databaseLocation 		= databaseOptions.databaseLocation;
		    configDatabaseType 			= "json";
			jsonDatabase 				= fs.readFileSync(databaseLocation);
			configSource 				= jsonDatabase;

			break;

		case mysql:
			configDatabaseType 			= "mysql";
			sequelizeInstance 			= new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'mysql'
			});

			break;

		case mariadb:
			configDatabaseType 			= "mariadb";
			sequelizeInstance 			= new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'mariadb'
			});

			break;

		case sqlite:
		    const databaseLocation 		= databaseOptions.databaseLocation;
			configDatabaseType 			= "sqlite";
			sequelizeInstance 			= new Sequelize({
				storage: databaseLocation,
				dialect: 'sqlite'
			});

			break;

		case postgres:
			configDatabaseType 			= "postgres";
			sequelizeInstance 			= new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'postgres'
			});

			break;

		case mssql:
			configDatabaseType 			= "mssql";
			sequelizeInstance 			= new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'mssql'
			});

			break;
	}
};

exports.interface = function (dataInput) {

	/*************\
	*             *
	*  Sequelize  *
	*             *
	\*************/
	if (databaseType !== "json") {
		// WIP
	}

	/********\
	*        *
	*  JSON  *
	*        *
	\********/
	if (databaseType === "json") {
		// WIP
	}

	return dataOutput
}
