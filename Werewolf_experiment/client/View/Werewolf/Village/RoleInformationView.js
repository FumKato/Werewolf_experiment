var roleDetailMessage = {
		'観戦者' : 'いらっしゃいませ。プレイヤーと一緒に推理をお楽しみください。',
		'仮GM' : '村建てありがとうございます。設定変更・キック, 各種発言が可能です。誤爆にお気をつけて。',
		'GM' : '村建てありがとうございます。設定変更・キック, 各種発言が可能です。誤爆にお気をつけて。',
		'村　人' : 'あなたは何の能力も持っていません。しかしあなたの推理が村を勝利に導くのです。',
		'占い師' : 'あなたは毎晩, 1人を人狼であるか占うことができます。妖狐を占った場合, 呪い殺すことができます。',
		'人　狼' : 'あなたは毎晩, 仲間と相談して1人を殺害することができます。村人を欺き, 勝利をつかむのです。',
		'狂　人' : '占いでは村人と判定されますが, あなたは人狼の仲間です。その立場を利用して, 人狼の勝利へ導くのです。',
		'霊能者' : 'あなたは毎晩, その日に処刑された人が人狼であるかを知ることができます。',
		'共有者' : 'あなたはもう1人の共有者を知ることができます。2人とも生存している場合, 夜に密談をすることができます。',
		'狩　人' : 'あなたは毎晩自分以外の1人を人狼の襲撃から守ることができます。人狼の心を読むのです。',
		'猫　又' : 'あなたは村人の仲間です。処刑されるとランダムに1人を、人狼に殺害されると人狼1人を道連れにします。',
		'少　女' : '毎晩, 誰か1人が人狼であるか知る事ができます。人狼を見つけた時, あなたの正体は人狼にばれてしまいます。',
		'妖　狐' : '人狼に襲撃されても平気ですが, 占われると死んでしまいます。生き残ること, それがあなたの勝利です。',
		'妖術師' : 'あなたは人狼の仲間です。毎晩, 誰か1人の役職が「村人」であるかを知ることができます。',
};

RoleInformationView = function(){
	var _this = RoleInformationView;
	_this.prototype.render = function(role) {
			var $roleName = $('#roleName');
			$roleName.html('');
			$('#roleDetailMessage').html('');
			$roleName.removeClass();
			switch(role.roleName) {
				case 'GM':
				case '仮GM':
				case '人　狼':
					$roleName.addClass('wolfOrGM');break;
				case '占い師':
					$roleName.addClass('seer');break;
				case '霊能者':
					$roleName.addClass('medium');break;
				case '狂　人':
					$roleName.addClass('fanatic');break;
				case '共有者':
					$roleName.addClass('mason');break;
				case '狩　人':
					$roleName.addClass('hunter');break;
				case '猫　又':
					$roleName.addClass('cat');break;
				case '少　女':
					$roleName.addClass('girl');break;
				case '妖　狐':
					$roleName.addClass('fox');break;
				case '妖術師':
					$roleName.addClass('fanatic');break;
			}
			$roleName.html(role.roleName);
			$('#roleDetailMessage').html(roleDetailMessage[role.roleName]);
			switch(role.roleName) {
				case '役職未定':
				  $("#roleIcon").html('<img src="/roleIcon/Unknown.png">'); break;
				case '観戦者' :
				  $("#roleIcon").html('<img src="/roleIcon/Audience.png">'); break;
				case 'GM':
				case '仮GM' :
				  $("#roleIcon").html('<img src="/roleIcon/Master.png">'); break;
				case '村　人' :
				  $("#roleIcon").html('<img src="/roleIcon/Villager.png">'); break;
				case '人　狼' :
				  $("#roleIcon").html('<img src="/roleIcon/Werewolf.png">'); break;
				case '占い師' :
				  $("#roleIcon").html('<img src="/roleIcon/Seer.png">'); break;
				case '霊能者' :
				  $("#roleIcon").html('<img src="/roleIcon/Medium.png">'); break;
				case '狂　人' :
				  $("#roleIcon").html('<img src="/roleIcon/Fanatic.png">'); break;
				case '狩　人' :
				  $("#roleIcon").html('<img src="/roleIcon/Hunter.png">'); break;
				case '共有者' :
				  $("#roleIcon").html('<img src="/roleIcon/Mason.png">'); break;
				case '妖　狐' :
				  $("#roleIcon").html('<img src="/roleIcon/Fox.png">'); break;
				case '猫　又' :
				  $("#roleIcon").html('<img src="/roleIcon/Cat.png">'); break;
				case '少　女' :
				  $("#roleIcon").html('<img src="/roleIcon/Girl.png">'); break;
				case '妖術師' :
				  $("#roleIcon").html('<img src="/roleIcon/Wizard.png">'); break;
			}
	};
};
roleInformationView = new RoleInformationView();
