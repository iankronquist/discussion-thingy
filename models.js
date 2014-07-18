var Sequelize = require('Sequelize')

var Node = Sequelize.define('Node', {
	value: Sequelize.INTEGER,
	propogate: Sequelize.STRING,
	id: Sequelize.UUID,
	text: Sequelize.TEXT,
	children: Sequelize.ARRAY(Sequelize.INTEGER),
	creator: Sequelize.INTEGER,
	time: Sequelize.DATE,
	flavor: Sequelize.INTEGER,
	is_root: Sequelize.BOOLEAN
});

var Board = Sequelize.define('Board', {
	id: Sequelize.UUID,
	members: Sequelize.ARRAY(Sequelize.INTEGER)),
	mods: Sequelize.ARRAY(Sequelize.INTEGER)),
	subboards: Sequelize.ARRAY(Sequelize.INTEGER)),
});

var User = Sequelize.define('User', {
	id: Sequelize.UUID,
	name: Sequelize.STRING,
	email: Sequelize.STRING
});

// STUB
var UserProfile = Sequelize.define('UserProfile', {
	id: Sequelize.UUID,
});
