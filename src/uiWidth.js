var jsInitChecktimer = setInterval (checkForTableLoad, 500);

function checkForTableLoad () {
    //Ensure not on Login/Logout screen
    if (document.body.className == 'u4-login-body'){
        clearInterval (jsInitChecktimer);
    } else {
        //Ensure body is loaded
        if (typeof document.body.id != "undefined"){
            var body_id_ref = "#" + document.body.id;
            //Ensure iframe is loaded
            if (typeof $(body_id_ref).contents().find("iframe")[0] != "undefined"){
                var iframe_id = $(body_id_ref).contents().find("iframe")[0].id;
                var iframe_id_ref = "#" + iframe_id;
                //Ensure MainTable is loaded
                if ($($(iframe_id_ref).contents().find('#contentContainerFrame')[0].contentWindow.document).find('.MainTable').length >= 1){
                    //Ensure Child Table is loaded
                    if ($($(iframe_id_ref).contents().find('#contentContainerFrame')[0].contentWindow.document).find('#b_s89_g89s90').length >= 1){
                        clearInterval (jsInitChecktimer);

                        $($(iframe_id_ref).contents().find('#contentContainerFrame')[0].contentWindow.document).find('.MainTable')[0].style.width = '100%';
                        $($(iframe_id_ref).contents().find('#contentContainerFrame')[0].contentWindow.document).find('#b_s89_g89s90')[0].style.tableLayout = "auto";
                    }
                }
            }
        }
    }
}