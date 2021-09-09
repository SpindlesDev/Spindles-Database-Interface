/****************************************\
* 	@author SpindlesDev (Ryan N)	*
*	@license GPL-v3			*
* 	@date 09/08/2021		*
\****************************************/

const fs = require("fs");
const sequelizeLibrary = require("sequelize");

// Init vars to define what is being used
var configSource = null;
var configDatabaseType = null;
var databaseLocation = null;
var jsonDatabase = null;
var sequelizeInstance = null;


exports.init = function (config) {
	// Config const
	
	const databaseType 			= config.databaseType;
	const databaseOptions 		= null;

	if (databaseType !== "sqlite" || databaseType !== "json") {
		const databaseName 			= config.database.databaseName;
		const databaseUsername 		= config.database.databaseUsername;
		const databasePassword 		= config.database.databasePassword;
		const databaseHost 			= config.database.databaseHost;
		databaseOptions 		= {
			databaseName: databaseName,
			databaseHost: databaseHost,
			databaseUsername: databaseUsername,
			databasePassword: databasePassword,
		};
	
	}

	switch (configJSONDatabaseType) {
		case json:
		    const databaseLocation 		= databaseOptions.databaseLocation;
		    configDatabaseType = "json";
			jsonDatabase = fs.readFileSync(databaseLocation);
			configSource = jsonDatabase;

			break;

		case mysql:
		    const databaseName 			= databaseOptions.databaseName;
		    const databaseUsername 		= databaseOptions.databaseUsername;
		    const databasePassword 		= databaseOptions.databasePassword;
		    const databaseHost 			= databaseOptions.databaseHost;
			configDatabaseType = "mysql";
			sequelizeInstance = new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'mysql'
			});

			break;

		case mariadb:
		    const databaseName 			= databaseOptions.databaseName;
		    const databaseUsername 		= databaseOptions.databaseUsername;
		    const databasePassword 		= databaseOptions.databasePassword;
		    const databaseHost 			= databaseOptions.databaseHost;
			configDatabaseType = "mariadb";
			sequelizeInstance = new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'mariadb'
			});

			break;

		case sqlite:
		    const databaseLocation 		= databaseOptions.databaseLocation;
			configDatabaseType = "sqlite";
			sequelizeInstance = new Sequelize({
				storage: databaseLocation,
				dialect: 'sqlite'
			});

			break;

		case postgres:
		    const databaseName 			= databaseOptions.databaseName;
		    const databaseUsername 		= databaseOptions.databaseUsername;
		    const databasePassword 		= databaseOptions.databasePassword;
		    const databaseHost 			= databaseOptions.databaseHost;
			configDatabaseType = "postgres";
			sequelizeInstance = new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'postgres'
			});

			break;

		case mssql:
		    const databaseName 			= databaseOptions.databaseName;
		    const databaseUsername 		= databaseOptions.databaseUsername;
		    const databasePassword 		= databaseOptions.databasePassword;
		    const databaseHost 			= databaseOptions.databaseHost;
			configDatabaseType = "mssql";
			sequelizeInstance = new Sequelize(databaseName, databaseUsername, databasePassword, {
				host: databaseHost,
				dialect: 'mssql'
			});

			break;
	}
};

exports.interface = function (dataInput) {
	// WIP

	return dataOutput
}
