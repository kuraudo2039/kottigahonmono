$('#ManagePassword2').keyup(function(){
  var Pass1 = $('#ManagePassword1').val();
  var Pass2 = $('#ManagePassword2').val();

  console.log(Pass1+" "+Pass2);

  if(Pass1!=Pass2){
    $('#PassAlert').css('display','block');
    $('#SubmitButton').prop('disabled', true);
  }

  else{
    $('#PassAlert').css('display','none');
    $('#SubmitButton').prop('disabled', false);
  }
});

console.log("test");
