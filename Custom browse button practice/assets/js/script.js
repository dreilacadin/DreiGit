$(function(){
	$("#upload-btn").on("change", function(){
		var files = $(this)[0].files;

		if(files.length == 1){
			var filename = e.target.value.split('\\').pop();
			console.log(filename);
			$("#label-span").text(filename);
		} else {
			$("#label-span").text(files.length + " Files ready to upload");
		}
	});
}); 