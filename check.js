$(document).ready(function(){
    //dont think this is working...
    var web= "https://staging-thesavyapp.herokuapp.com";
    
    
    
    

          var btn;
            var btnVar;
    if($("script[src*='s3.amazonaws.com/shopify-apps/pre-order/js/jquery.spur.cart.api.js']" && $(".tooltipstered").is(":visible")).length>0) {
            btn= $(".tooltipstered").first().outerWidth();
            btnVar= $(".tooltipstered").first();
            if($(".satcb_btn input").length<=0 || $("div.purchase.clearfix").length<=0) {
                $(".tooltipstered").first().css({"width": btn+"px",
                                                        "display": "inline-block"});

            }
                
                
            } else if($("input[type='submit'][name='add']").length>0) {
         // var cartVerif= $("input[type='submit'][name='add']").text().toLowerCase();
           // console.log(cartVerif);
           // if(cartVerif.indexOf("cart")>0) {
          
          btn= $("input[type='submit'][name='add']").first().outerWidth();
          btnVar= $("input[type='submit'][name='add']").first();
          if($(".satcb_btn input").length<=0 || $("div.purchase.clearfix").length<=0) {
            $("input[type='submit'][name='add']").first().css({"width": btn+"px",
                                                    "display": "inline-block"});
            }
         
             //   }
          
      } else if($("button[type='submit'][name='add']").length>0) {
          //var y= encodeURI(window.location.href);
          //$.get("http://localhost:3000/current-url?currentUrl="+y);
          //var cartVerif= $("button[type='submit'][name='add']").text().toLowerCase();
       // console.log(cartVerif);
      //  if(cartVerif.indexOf("cart")>0) {
          
         btn= $("button[type='submit'][name='add']").first().outerWidth();
          btnVar= $("button[type='submit'][name='add']").first();
          if($(".satcb_btn button").length<=0 || $("div.purchase.clearfix").length<=0) {
                  $("button[type='submit'][name='add']").first().css({"width": btn+"px",
                                                    "display": "inline-block"});
              }
          
        //}
          
      } else if($("script:contains('\"name\":\"Canopy\"')").length>0) {
               
          btn= $("button[name='add']").first().outerWidth();
          btnVar= $("button[name='add']").first();
           $("button[name='add']").first().css({"width": btn+"px",
                                                    "display": "inline-block"});
                
      }
    console.log(btn);
    
    //$.get(web+"/cartButton?width="+btn); REVERT TO THIS 622ae3df385a7cd5b1755e9715c95db5617d3ad7
    
    btnVar.click(function(){
        var socket = io.connect(web);
        var dat= {
            page: window.location.href
        };
       socket.emit("add-to-cart-clicked", dat);
        
    });
  
    
    if(btn) {
      $("#cartAndTb").width(btn+377);  
        console.log(btn);
       
    } else {
        $("#cartAndTb").width(377+377);
        
        
    }
    /*
    
    if($(".satcb_btn button").length>0) {
        $(".satcb_btn button").css("width", "121px");

    } else if($(".satcb_btn input").length>0) {
        $(".satcb_btn input").css("width", "121px");
    }
    */
    
    
        window.addEventListener("message", function(e){
                console.log(e.origin);
                console.log(e.data);
            if(e.origin!==web) {
                return;
            } else {
                var position= e.data;
                console.log(position);
                width= width+5; //for question mark
                if (position==="right") {
                    $("#plzwork").css({"display": "inline",
                                       "border": "none",
                                       "vertical-align": "middle",
                                       "height": "70px",
                                       "margin-left": "-5px",
                                      "margin-bottom": "auto",
                                      "width": "360px"});
                } else {
                    position= parseInt(position);
                    var width=247+position*4;
                    
                    if(width>btn) {
                    
                    $("#plzwork").css({"display": "block",
                                       "border": "none",
                                       "vertical-align": "bottom",
                                       "margin-bottom":"-100px",
                                       "height": "100px",
                                       "width": width+"px",
                                       "margin-left": "auto"});
                    
                    $("#cartAndTb").css({"width": width+"px",
                                        "text-align": "center",
                                        "margin-left": "-"+((width-btn)/2)+"px"}); 
                     } else {
                            $("#plzwork").css({"display": "block",
                                       "border": "none",
                                       "vertical-align": "bottom",
                                       "margin-bottom":"-100px",
                                       "height": "100px",
                                       "width": btn+"px",
                                       "margin-left": "auto"});
                    
                            $("#cartAndTb").css({"width": btn+"px",
                                                "text-align": "center"});
                            
                        }
                    if(window.location.href.indexOf("newmoonenterprise")<0) {
                        console.log("ugh bottom");
                        $("#cartAndTb").css("margin-bottom", "50px");
                    }
                }
                
               
            }
            
           
        }, false);
   
    
    
    
   // $("#urlTest").text(window.location.href);
          
          
    
    
    

   /*
    
    $(".tacboard-form").keypress(function(event){
        return event.keyCode != 13;
    });
    
    
    $("#tacit").click(function(){
        var x= $("#tac-input").val()+"";
        x= parseInt(x.substring(1));
        var html= '<div id="redirbtn"><a href="https://thetacboard.com" target="_blank"><button id="tacked" type="button">Tacked at $'+x+'</button></a></div>';
            console.log(x);
        
            if((!isNaN(x)) && (x!=="")) {
                console.log("good");
                //tb cookie blue print: "tacboard={tacs objects}";
                if(tbCookieExists()) {
                    //send ajax post request w/ url and tacked price 
                    console.log("IT EXISTS!");
                    
                   $.post("http://localhost:3000/store-new-tac", {tackedPrice: x, url: encodeURI(window.location.href)});
                    
                  
                    $(".tacboard-form").css("display", "none");
                    
                    $("#tacboard").prepend(html);
                        //    <div id="redirbtn"><a href="https://thetacboard.com" target="_blank"><button id="tacked" type="button">Tacked at $90</button></a></div>
                    //hide html & create button that shows tacked price
                    return false;
                } else {
               
               //var imp= document.getElementById("tacit");
                //imp.setAttribute("type", "submit");
                
                var y= window.location.href;
                //imp.click();
                window.open('http://localhost:3000/signup-pop?price='+x+'&url='+encodeURIComponent(y), 'newwindow', 'width=600, height=450'); 
                //imp.setAttribute("type", "button");
                //document.location.replace("/");
                
                return false;
            }
          }

    });
    */
    /*
  function runner() {
      var counter= 1;
      var hope= setInterval(function(){
          var dc= document.cookie;
          var temp= dc.split("=");
          for(var i=0; i<temp.length; i++) {
              if(temp[i]==="tacboard" || temp[i]==="incompleteTb") {
                  window.location.reload();
                  break;
              }
          }

          counter++;
         
          
          if(counter>= 9000) {
              clearInterval(hope);
          }
      }, 100);  
      
  } 
  */
    
 /*
    function tbCookieExists() {
        var dc= document.cookie;
        console.log(dc);
        var tb= "tacboard=";
        var verifier= dc.indexOf(tb);
        
        if(verifier=== -1) {
            return false;
        } else {
            return true;
        }
    }
    
    function incompleteTbCookieExists(){
        var dc= document.cookie;
        console.log(dc);
        var tb= "incompleteTb=";
        var verifier= dc.indexOf(tb);
        
        if(verifier=== -1) {
            return false;
        } else {
            return true;
        }
    }
     /*

keep $ symbol present!
    
var readOnlyLength = 2;


 
 $("#tac-input").focus(function(){
	$(this).val("$ ");
 });
 
 $("#tac-input").blur(function(){
     if($(this).val()==="$ ") {
         $(this).val("");
        $(this).attr("placeholder", "$ PRICE I'D PAY");
     }
 
 });
 
 

$("#tac-input").on("click", function(){
	
	
		if(this.selectionStart< readOnlyLength) {
    	
    	this.selectionEnd= 3;
    }
});




$('#tac-input').on('keypress, keydown', function(event) {
    //console.log(event.which);
    if((event.which== 39) && ($("#tac-input").val()=== "$ ")) {
        
  	     this.selectionStart= 3;
    }
    
    
    if(event.which== 38) {
    return false;
    }
    
    //console.log(this.selectionStart, this.selectionEnd);
      var start= this.selectionStart;
      var end= this.selectionEnd;
      var len= $("#tac-input").val().length;
    if(end-start===2) {
        return false;
    }
    
     if((end-start===len) && (event.which!==8) && (event.which!==39)) {
        console.log(event.which);
        $("#tac-input").val("$ ");
   
    }
    
    
    
    
    if(((event.which== 8) || (event.which== 37)) && ((this.selectionStart< readOnlyLength) || (this.selectionStart== readOnlyLength))) {
    	
      if((event.which== 8) && (end-start===len)) {

        $("#tac-input").val("$  ");
          
      } else {
      	return false;
      }
    	
    }
    
 
});                    
    
    
    

  */  

});

