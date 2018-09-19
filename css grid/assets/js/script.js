//  $(document).ready(function(){
//  	$('#togglegrid').change(function(){
//  		if(this.checked){
//  			$('.clm').css({
//  				display: 'block'
//  			} else if(this.{
//  				$('.clm').css({
//  					display: 'none'
//  				});
//  			});
//  		};
//  	});
// });

 $(document).ready(function(){
        $('#togglegrid').click(function(){
            if($(this).prop("checked") == true){
                $(".clm").css("display", "block");
            }
            else if($(this).prop("checked") == false){
                $(".clm").css("display", "none");
            }
        });
    });