$(window).on('load',function() {
	$(".preloader").delay(0).fadeOut("slow");
});

function openNav() {
  	document.getElementById("mySidenav").style.width = "100%";
  	setTimeout(function() { document.getElementById("sidenav-content").style.opacity = "1"; }, 300);
  
}

function closeNav() {
	document.getElementById("sidenav-content").style.opacity = "0";
	setTimeout(function() { document.getElementById("mySidenav").style.width = "0"; }, 300);
}

$('form input').keydown(function (e) {
    if (e.keyCode == 13) {
        var inputs = $(this).parents("form").eq(0).find(":input");
        if (inputs[inputs.index(this) + 1] != null) {                    
            inputs[inputs.index(this) + 1].focus();
        }
        e.preventDefault();
        return false;
    }
});
$("#frm-contact, #frm-survey").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        $('.contact-form-success').css('opacity', '1');
        $('#frm-contact, #frm-survey')[0].reset();
    });
  });	