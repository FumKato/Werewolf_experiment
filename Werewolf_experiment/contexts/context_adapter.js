if(Meteor.isClient){
	Tracker.autorun(function(){
		switch(Session.get('myRole')){
			case '村　人':
				break;
			case '人　狼':
				break;
			case '占い師':
				break;
			case '霊能者':
				break;
			case '狂　人':
				break;
			case '狩　人':
				break;
			case '共有者':
				break;
			case '妖　狐':
				break;
			case '猫　又':
				break;
			case '妖術師':
				break;
			case '少　女':
				break;
			case 'GM':
				break;
			case '仮GM':
				break;
		}
	});
}

if(Meteor.isServer) {
	adapt_context = function(){

	};
	
	deactivate_context = function(){
		
	};
	
	applyContext = function(){
		
	};
}
