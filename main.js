/***********************************\
* 	@author SpindlesDev (Ryan N)	*
*	@license MIT					*
* 	@date 08/16/2021				*
\***********************************/

const fs = require("fs");
const sequelizeLibrary = require("sequelize");

// Init vars to define what is being used
const configSource = null;
const configDatabaseType = null;
const databaseLocation = null;
const jsonDatabase = null;

exports.init = function (config) {
	// Config const
	const databaseType = config.databaseType;
	const databaseOptions = config.databaseOptions;

	switch (configJSONDatabaseType) {
		case json:
			// WIP
			configDatabaseType = "json";
			databaseLocation = databaseOptions.fileLocation;
			jsonDatabase = fs.readFileSync(databaseLocation);
			configSource = jsonDatabase;

			break;

		case mysql:
			// WIP

			break;

		case mariadb:
			// WIP

			break;

		case sqlite:
			// WIP

			break;

		case postgres:
			// WIP

			break;

		case tedious:
			// WIP

			break;
	}
};
