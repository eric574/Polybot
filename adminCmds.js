function admin1 () {
	console.log("Running admin command 1...");
}

function admin2 () {
	console.log("Running admin command 2...");
}

function admin3 () {
	console.log("Running admin command 3...");
}

module.exports = {
	checkAdminCmd: function(message) {
		let command = message.content;
		let found = false;
		switch (command) {
			case '?admin1':
				found = true;
				admin1();
				break;
			case '?admin2':
				found = true;
				admin2();
				break;
			case'?admin3':
				found = true;
				admin3();
				break;
		}
		return found;
	}
}