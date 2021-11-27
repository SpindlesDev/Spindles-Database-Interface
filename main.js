/****************************************\
* 	@author SpindlesDev (Ryan N)		*
*	@license GPL-v3						*
* 	@date 09/08/2021					*
*	@description A database interface 	*
*	for SpindlesDev projects to easily	*
* 	controlling database data.			*
\****************************************/

// Testing support
const sequelizeLibrary = require("../Spindles-Database-Test-Project/node_modules/sequelize") || require("sequelize");

const fs = require("fs");

let databaseTypeGlobal 					= null;
databaseLocationGlobal 					= null;

/**
 * 
 * @param {Object} config The config object to use for the database interface 
 * @param {string} config.databaseType Type of the database
 * @param {Object} config.databaseOptions The database options to use
 * @param {string} config.databaseOptions.databaseURI The URI of the database to use
 * @param {string} config.databaseOptions.databaseLocation The location of the database to use (JSON and )
 */
exports.init = function (config) {
	const databaseType 					= config.databaseType.toLowerCase();
	databaseTypeGlobal 					= databaseType		
	const databaseURI   				= config.databaseOptions.databaseURI;
	const databaseLocation 				= config.databaseOptions.databaseLocation;
	databaseLocationGlobal 				= databaseLocation

	switch (databaseType) {
		case "json":
		    configDatabaseType 			= "json";
			break;

		case "mysql":
			configDatabaseType 			= "mysql";
			sequelizeInstance 			= new Sequelize(databaseURI, {
				dialect: 'mysql'
			});

			break;

		case "mariadb":
			configDatabaseType 			= "mariadb";
			sequelizeInstance 			= new Sequelize(databaseURI, {
				dialect: 'mariadb'
			});

			break;

		case "sqlite":
			configDatabaseType 			= "sqlite";
			sequelizeInstance 			= new Sequelize({
				storage: databaseLocation,
				dialect: 'sqlite'
			});

			break;

		case "postgres":
			configDatabaseType 			= "postgres";
			sequelizeInstance 			= new Sequelize(databaseURI, {
				dialect: 'postgres'
			});

			break;

		case "mssql":
			configDatabaseType 			= "mssql";
			sequelizeInstance 			= new Sequelize(databaseURI, {
				dialect: 'mssql'
			});

			break;
	}
};

/**
 * 
 * @param {Object} dataInput Input data to handle
 * @param {string} dataInput.type Action to do [Overwrite, Read, Write]
 * @param {string} dataInput.object Object to write
 * @returns 
 */
exports.interface = function (dataInput) {

	const databaseLocation = databaseLocationGlobal
	const databaseType = databaseTypeGlobal;
	let dataOutput = null;
	const databaseAction = dataInput.type.toLowerCase();

	if (fs.existsSync(databaseLocation) !== true) {
		fs.writeFileSync(databaseLocation, JSON.stringify([], null, 2));
	}

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

		if (databaseAction === "overwrite") {
			let databaseData = [];
			console.log(JSON.stringify(databaseData))
			databaseData.push(dataInput.data);
			fs.writeFileSync(databaseLocation, JSON.stringify(Object(databaseData), null, 2));
			console.log(JSON.stringify(databaseData))
			dataOutput = databaseData;
		}

		if (databaseAction === "write") {
			const databaseData = JSON.parse(fs.readFileSync(databaseLocation));
			console.log(JSON.stringify(databaseData))
			databaseData.push(dataInput.data);
			fs.writeFileSync(databaseLocation, JSON.stringify(Object(databaseData), null, 2));
			console.log(JSON.stringify(databaseData))
			dataOutput = databaseData;
		}
	}

	return dataOutput
}
