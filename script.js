//no css
import {initialData} from './initialData.js';


$(document).ready(function() {

    $("#code").hide();
    $("#unminify-info").hide();

/**load and convert initial data**/
    $("#editor textarea").val(initialData);
    convertAndLoad(initialData);

/**process change on real time with keyup event**/
    $("#editor textarea").keyup(function(){
        var currentData = $("#editor textarea").val();
        convertAndLoad(currentData);
    });

/***process toggle betwenn preview and code ****/
    $("#view-code").click(function(){
        $("#preview").hide();
        $("#code").fadeIn();
        /*
        if($( '#preview' ).is(":visible")){
            $( '#preview' ).hide();
        } else{
            $( '#preview' ).show();
        }*/
    });
    $("#view-preview").click(function(){
        $("#code").hide();
        $("#preview").fadeIn();
        
    });

/***redirection to unminify html code */
    $("#unminify").click(function(){
        $("#unminify-info").fadeToggle();
    });
    $("#copy").click(function () {
        /* Copy text into clipboard */
        navigator.clipboard.writeText($("#code article").text());
    });
  
});

//function to convert markdown text in html code using marked library
function convertAndLoad(data){
    var texte = marked.parse(data);
    $("#preview article").html(texte);
    $("#code article").text(texte);
}