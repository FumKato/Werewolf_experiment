RolesController = function() {
		var _this = RolesController;
		
		var getColleagueName = function(roles){
			var playersModel = new PlayersModel();
			var message = '';
			for(var i=0; i<roles.length; i++){
				if(roles[i].playerID == Session.get('myPlayerID')) continue;
				var player = playersModel.getPlayersByID(roles[i].playerID);
				message = message + player.characterName + ' ';
			}
			message = message.slice(0, -1);
			return message;
		};
		
		_this.prototype.updateRolesView = function() {
			var role = new RolesModel().getRolesByPlayerID(Session.get('myPlayerID'));
			if(role == null) return;
			Session.set('myRole', role);
			new RoleInformationView().render(role);
			if(role.roleName == '仮GM' || role.roleName == 'GM'){
				var villageView = new VillageView();
				villageView.flush('systemWindow');
				villageView.render('GMMenu');
				return;
			} else if(role.roleName == '人　狼' || role.roleName == '共有者') {
				var roles = new RolesModel().getRolesByRoleName(Session.get('villageID'), role.roleName).fetch();
				if(roles.length > 1) {
					var systemWindowView = new SystemWindowView();
					if(role.roleName == '人　狼') {
						var message = 'あなたの仲間は <span class="wolfOrGM">';
					} else {
						var message = 'もう一人の共有者は <span class="mason">';
					}
					message += getColleagueName(roles);
					message += '</span>です';
					systemWindowView.renderColleague(message);
				}
			}
			var villageView = new VillageView();
			villageView.flush('GMMenu');
			villageView.render('systemWindow');
	};
};
rolesController = new RolesController();
