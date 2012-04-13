// JavaScript Document

var catalog=[
	"Serials","Movie","Variety","Cartoon","New","Entertainment","Documentary","New","Entertainment","Originals",
	"Sports","Technology","Games","Fashion","Travel","Others"];
	
	
jQuery.fn.loadCatalog=function()
{
	
	var catalogHtml;
	alert(catalog.length);
	for(var i=0;i<catalog.length;i++)
	{
		catalogHtml+='<li><span><input type="radio" name="catIds" ';
		alert(catalogHtml);
		catalogHtml+=' id="form-cat-'+i+'" value="'+i+'" ';
		catalogHtml+=' title="'+catalog[i]+'"><label>';
		catalogHtml+=catalog[i]+'</label></span></li>';
		alert(catalogHtml);
	}
	$(this).html(catalogHtml);
}
