
    $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
        PopUpHideCase();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup").hide();
    }

    function PopUpShowCase() {
        $("#popupCase").show();
    }
    function PopUpHideCase() {
        $("#popupCase").hide();
    }