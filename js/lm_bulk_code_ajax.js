$(document).ready(function(e){

    var basePath = Drupal.settings.basePath;
    var modPath = basePath + "lm_bulk_code/";
    var modPath1 = basePath + "lm_bulk_code/labs/";
    var modPath2 = basePath + "lm_bulk_code/labs/all";
    var modPath3 = basePath + "lm_bulk_code/forms/";
    var modPath4 = basePath + "comments/rand/";

$('#disapprove_textrea').hide();
$('.submit_lm_form_bulk_approve').hide();

$(this).on('change', '#select_lab', function(){
				var	id = $('#select_lab').val();					
				var type = $('#select_lab').attr('id');				
			    var dataString = 'id='+ id + '&type=' + type;
				    
if(id == 0){
$('#download_entire_lab').hide();
$('#disapprove_textrea').hide();
$('.submit_lm_form_bulk_approve').hide();
}else{	    
$.ajax({
      type: "POST",
      url: modPath + "ajax/",
      data: dataString,
      cache: false,
      success: function(result){  
       $('#download_entire_lab').show();     
       $('#download_entire_lab').html(result);
       $('#disapprove_textrea').show();
       $('.submit_lm_form_bulk_approve').show();              
      }
      });
      }
					
});
/*****############################******/
$(".submit_lm_form_bulk_approve").click(function(){
//$(this).on('submit', '.submit_form_bulk_approve', function(event) {
var pref_id = $("#select_lab").val();
console.log(pref_id);
var action = $(".form_action:checked").val();
var dis_approve_reason = $("#dis_approve").val();
console.log(dis_approve);
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'pref_id='+ pref_id + '&action='+ action + '&dis_approve_reason='+ dis_approve_reason ;
if(pref_id==null || pref_id=='', action ==null || action == '' ){
alert('Please select action');

}
else{
// AJAX Code To Submit Form.
console.log(dataString);
var conf_action=confirm("Are  you sure?");
    if (conf_action==true)
    {
$.ajax({
       type: "POST",
       url: modPath1 + "ajax/",
       data: dataString,
       cache: false,			
       success: function(data){
           var re_load=confirm(data);
           if (re_load==true){
              window.location.reload();
           }else{
             window.location.reload();
            }
      }

});
    }
    else
    { 
    window.location.reload(); 
    return false;
    }
//location.reload();
//trigger('reset');		
}
return false;
});
/*****############################******/
	
	 

});/***********************************/




