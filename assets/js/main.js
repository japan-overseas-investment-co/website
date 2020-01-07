/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			$(':lang(en)').hide();

			$('#lang-en').click(function () {
				$(':lang(jp)').hide();
				$(':lang(en)').show();
				$('#name').attr('placeholder', 'Name');
				$('#email').attr('placeholder', 'Email');
				$('#message').attr('placeholder', 'Message');
				$('#sendMessage').attr('value', 'Send Message');
				$('#clearForm').attr('value', 'Clear Form');
			});

			$('#lang-jp').click(function () {
				$(':lang(en)').hide();
				$(':lang(jp)').show();
				$('#name').attr('placeholder', '名前');
				$('#email').attr('placeholder', '電子メールアドレス');
				$('#message').attr('placeholder', 'メッセージ');
				$('#sendMessage').attr('value', 'メッセージを送る');
				$('#clearForm').attr('value', '明確な申請書');
			});

			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Placeholder Language Change
		// const placeholderLang = (dictionary) => {
		// 	$("lang-en").each(() => {
		// 		if ($(this).is("input")) {
		// 			$(this).attr('placeholder', dictionary[$(this).data("translate")])
		// 		} else {
		// 			$(this).text(dictionary[$(this).data("translate")])
		// 		}
		// 	})
		// };

})(jQuery);