ActionButtonView = function(){
	return{
		render: function(target){
			var targetName = '#' + target;
			var $target = $(targetName);
			$target.show();
			$target.removeAttr('disabled');
		},
		
		flush: function(){
			var $buttons = $('.actionButtons');
			$buttons.attr('disabled', 'disabled');
			$buttons.hide();
		}
	};
};
