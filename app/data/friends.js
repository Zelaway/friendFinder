// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var friendsID = [
	{
		customerName: "Adam",
		customerEmail: "zelaway@me.com",
		profileName: "asawyer81",
		facebookUrl: "https://www.facebook.com/adam.sawyer.73"
		scores : [
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3'
		]


	}
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendsID; 