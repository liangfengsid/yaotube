
(function($){
	$.fn.loadCatalog=function()
	{
		alert("loadCatalog");
		var catalogHtml;
		
		for(var i=0;i<catalog.length;i++)
		{
			catalogHtml+='<li><span><input type="radio" name="catIds" ';
			catalogHtml+=' id="form-cat-'+i+'" value="'+i+'" ';
			catalogHtml+=' title="'+catalog[i]+'"><label>';
			catalogHtml+=catalog[i]+'</label></span></li>';
		}
		$(this).html(catalogHtml);
	}
})

$(function(){
	
	var dropbox = $('#drag_area'),
		message = $('.message', dropbox),
		select_button=$('#select_button');
	
	var opts={
		paramname:'mp4',
		
		maxfiles: 1,
    	maxfilesize: 2048,
		url: 'post_file.php',
		
		beforeUpload:function(files){
			alert(files[0].name);	
		},
		
		uploadButton:$('#upload_button'),
		
		uploadPath:$('#select_file_path'),
		
		uploadSize:$('#select_file_size'),
		
		selectButton:$('#select_button'),
		
		selectButtonId:"select_button",
		
		beforeUpload:function(file){
			$('#select_file_path').html(file.name);
			$('#select_file_path').val(file);
			$('#select_file_size').html(Math.round(file.size/1024)+"KB");	
		},
		
		uploadFinished:function(i,file,response){
			$.data(file).addClass('done');
			// response is the JSON object that post_file.php returns
		},
		
    	error: function(err, file) {
			switch(err) {
				case 'BrowserNotSupported':
					showMessage('Your browser does not support HTML5 file uploads!');
					break;
				case 'TooManyFiles':
					alert('Too many files! Please select 1 at most! (configurable)');
					break;
				case 'FileTooLarge':
					alert(file.name+' is too large! Please upload files up to 2mb (configurable).');
					break;
				default:
					break;
			}
		},
		
		// Called before each upload is started
		beforeEach: function(file){
			if(!file.type.match(/^video\//)){
				alert('Only videos are allowed!');
				
				// Returning false will cause the
				// file to be rejected
				return false;
			}
		},
		
		uploadStarted:function(i, file, len){
			alert("upload started");
			createImage(file);
		},
		
		progressUpdated: function(i, file, progress) {
			$.data(file).find('.progress').width(progress);
		}
	};
		
	//select_button.fileSelect(opts);
	//dropbox.filedrop(opts);
	
	var template = '<div class="preview">'+
						'<div class="progressHolder">'+
							'<div class="progress"></div>'+
						'</div>'+
					'</div>'; 
	
	
	function createImage(file){

		var preview = $(template);
		
		message.hide();
		preview.appendTo(dropbox);
		
		// Associating a preview container
		// with the file, using jQuery's $.data():
		
		$.data(file,preview);
	}

	function showMessage(msg){
		message.html(msg);
	}
	
	
	
	$(document).ready(function() {
		$('#select_button').fileSelect(opts);
		$('#drag_area').filedrop(opts);
		$(".typeSelector").loadCatalog();
	});

});



