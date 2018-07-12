
//Ativo
$(".menu-button a").on("click", function(){
    $(".menu-button").find(".ativo").removeClass("ativo");
    $(this).parent().addClass("ativo");
 });

 //Validação Formulário
 function validate(){
     if (document.formContato.nome.value == ""){
         $("#nome").tooltip("show");
         document.formContato.nome.focus();
         return false;
     }
     
     if( document.formContato.mail.value == "" ){
        
        //verificação de e-mail
        var emailID = document.formContato.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Por favor, insira um e-mail válido")
            document.formContato.mail.focus() ;
            return false;
         }    
        $("#mail").tooltip("show");
        document.formContato.mail.focus() ;
        return false;
    }
    
    if( document.formContato.mensagem.value == "" ){
        $("#mensagem").tooltip("show");
        document.formContato.mensagem.focus() ;
        return false;
    }
    return( true );
 }