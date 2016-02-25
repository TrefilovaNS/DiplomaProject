/**
 * 
 * @author Наталья
 * @module EmpList
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function (aCallback, hID) {

            callback = aCallback;
            if (hID) {
                model.qEmpList.params.human_id = hID;
                model.requery();
            } else {
                model.qEmpList.push({});
            }

            
            form.show();
        };
        
        require(['EmpForm'], function (EmpForm) {
            var empForm = new EmpForm();
            form.modelGrid.onMouseClicked = function (event) {
                if (event.clickCount > 1) {
                    empForm.show(refresh, self.show());
                }
            };
        });
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
