// ==UserScript==
// @name         SP - PWD - Func
// @version      0.1
// @description  Paste id and password.
// @author       trond
// @match        http://skoleportalen.ror-ikt.no/pages/PasswordChange.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#lnkBtnSameForAll").parents("ul").append('<li><a id="loadPassword" class="text-white bg-teal-400 hoverchange">Hent passord fra liste</a></li>');
    // Your code here...
    $("body").append('<div class="modal" tabindex="-1" role="dialog" id="modalPasswordList"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">Sett inn passord</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Avbryt"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <p>Lim inn passordene som skal settes inn, i formatet: FeideID	&lt;Tab&gt;Passord. En pr linje.</p> <textarea id="feideIDPasswordList" style="width:100%; height:300px;" ></textarea> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" id="SetPassword">Sett inn passord</button> <button type="button" class="btn btn-secondary" data-dismiss="modal">Avbryt</button> </div> </div> </div> </div>');

    $("#loadPassword").click(function(){ $("#modalPasswordList").modal('show'); return false; } );

    $("#SetPassword").click(function(){ insertPasswordList($('#feideIDPasswordList').val());  } );

    $('input[placeholder="Nytt passord..."]').parents('tr').append('<td style="width:20px;"><i class="icon-user-block removeUserFromPassword text-warning"></i></td>');

    $('.removeUserFromPassword').click(function(){
        let passInput = $(this).parents('tr').find('input[placeholder="Nytt passord..."]');
        if( passInput.is(":visible") ){
            passInput.val("1");
        } else {
            passInput.val("");
        }
        passInput.toggle();
    });

    function insertPasswordList( textList ){
        textList = textList.trim();
        if( textList == "" ) return false;

        let missing = [];
        let doneNumb = 0;
        let passwdInputs = $('input[placeholder="Nytt passord..."]');

        let lines = textList.split("\n");

        $.each( lines, function( key, value ){
            let temp = value.split("\t");

            if(temp.length == 2 ){
               $('input[title="' + temp[0] + '"').val(temp[1]);
            } else {
                if( passwdInputs[doneNumb] != undefined ){
                    if($(passwdInputs[doneNumb]).is(":visible") ){
                        $(passwdInputs[doneNumb]).val(temp);
                    }
                   doneNumb++;
                }
            }
        });
        $("#modalPasswordList").modal('hide');
        return false;

    }



})();
