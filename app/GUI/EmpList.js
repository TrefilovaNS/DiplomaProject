/**
 * 
 * @author Наталья
 * @module EmpList
 */
define(['orm', 'forms', 'ui','EmpForm'], function (Orm, Forms, Ui, EmpForm, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
          
        self.show = function () {
            form.show();
        };
      
        
      
            form.modelGrid.onMouseClicked = function (event) {
                if (event.clickCount > 1) {
                    var empForm = new EmpForm(form.modelGrid.selected[0].human_id);
                    empForm.show();
                }
            };
     
        // TODO : place your code here
        function refresh() {
        model.requery();
       }

        

        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
