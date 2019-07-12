 // 截取参数
 function GetUrlParam(paraName) {　　　　
     var url = document.location.toString();　　　　
     var arrObj = url.split("?");

     　　　　
     if (arrObj.length > 1) {　　　　　　
         var arrPara = arrObj[1].split("&");　　　　　　
         var arr;

         　　　　　　
         for (var i = 0; i < arrPara.length; i++) {　　　　　　　　
             arr = arrPara[i].split("=");

             　　　　　　　　
             if (arr != null && arr[0] == paraName) {　　　　　　　　　　
                 return arr[1];　　　　　　　　
             }　　　　　　
         }　　　　　　
         return "";　　　　
     }　　　　
     else {　　　　　　
         return "";　　　　
     }　　
 }

 // alert 弹窗
 function panelAlert(text) {
     var div = document.createElement("div");
     div.id = "alert";
     div.className = "alert";
     div.innerText = text;
     document.body.appendChild(div);

     setTimeout(function() {
         document.getElementById('alert').remove();
     }, 2000);

 }