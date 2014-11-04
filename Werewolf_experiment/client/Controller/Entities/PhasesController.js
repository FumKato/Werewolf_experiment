PhasesController = function() {
	return {
		updatePhasesView: function() {
			var phase = new PhasesModel().getPhases(Session.get('villageID'));
			var role = new RolesModel().getRolesByPlayerID(Session.get('myPlayerID'));
			var player = new PlayersModel().getPlayersByID(Session.get('myPlayerID'));
			if(phase == null) return;
			var villageView = new VillageView();
			villageView.updateBackgroundColor(phase);
			if(role == null || player == null) return;
			var actionButtonView = new ActionButtonView();
			if(phase.phase == '事件前'){
				villageView.flush('logSelector');
				switch(role.roleName){
						case 'GM':
						case '仮GM':
							actionButtonView.render('changeSettings');
							new GMMenuView().renderButton('spoilVillage');
							new GMMenuView().renderButton('readyCheck');
							villageView.render('extraMenu');
							new ExtraMenuView().renderButtons(['cnChange']);
							break;
						case '役職未定':
							actionButtonView.render('changeName');
							villageView.render('extraMenu');
							new ExtraMenuView().renderButtons(['suicide', 'imready']);
							break;
						case '観戦者':
							actionButtonView.render('participate');
							villageView.flush('extraMenu');
							break;
				}
			} else {
				new GMMenuView().flushButton('spoilVillage');
				new GMMenuView().flushButton('readyCheck');
				villageView.flush('extraMenu');
				villageView.render('logSelector');
			}
			
			if(Session.get('villageID')==null || Session.get('currentPhase') == phase.phase) return;
			Session.set('currentPhase', phase.phase);
			if(Session.get('sound')){
				soundManager.stop();
			}
			new OverlaysView().flush();
			new VillageInformationView().renderPhaseInformation(phase);
			Session.set('logSelector', null);
			Session.set('selectedPlayer', null);
			Session.set('latestLogNumber', -1);
			chatLogView.flush();
			chatLogsController.updateChatLogsView();
			var logSelectorView = new LogSelectorView();
			logSelectorView.flush();
			logSelectorView.render(phase);
			if(role == null || player == null) return;
			actionButtonView.flush();
			switch(phase.phase){
				case '昼':
					if(role.roleName != 'GM' && role.roleName != '観戦者' && player.state == '生　存'){
						new SystemWindowView().flush('voteInformation');
						actionButtonView.render('timeSkip');
					}
					break;
				case '夕方':
					if(Session.get('currentState') == '生　存'){
						new SystemWindowView().flush('actionInformation');
					}
					if(role.roleName != 'GM' && role.roleName != '観戦者' && player.state == '生　存'){
						actionButtonView.render('vote');
					}
					break;
				case '夜' :
					if(role.roleName != 'GM' && role.roleName != '観戦者' && player.state == '生　存'){
						actionButtonView.render('timeSkip');
					}
					break;
				case '明け方':
					soundManager.playBellSound();
					if(player.state == '死　亡') break;
					switch(role.roleName){
						case '占い師':
							actionButtonView.render('see');
							break;
						case '人　狼':
							actionButtonView.render('kill');
							break;
						case '狩　人':
							if(phase.day != 1)
							actionButtonView.render('guard');
							break;
						case '少　女':
							if(phase.day != 1)
							actionButtonView.render('nightWalk');
							break;
						case '妖術師':
							actionButtonView.render('magic');
							break;
					}
					break;
				case '事件終了':
					$('#villageBackButton').show();
					if(role.roleName != '観戦者' && role.roleName != 'GM'){
						actionButtonView.render('report');
					} else if(role.roleName == 'GM'){
						new GMMenuView().flushButton('kick');
					}
					break;
			}
		}
	};
};
