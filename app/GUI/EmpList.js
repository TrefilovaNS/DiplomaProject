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
        form.Add.onActionPerformed = function (event) {
                              
            var addEmp = new EmpForm();
            addEmp.show();
            model.requery();
//            
        form.Delete.onActionPerformed = function (event) {
                if (confirm("Удалить?")) {
                    for (var i in form.modelGrid.selected) {
                        model.qEmpList.splice(model.qEmpList.indexOf(form.modelGrid.selected[i]), 1);  //Удаляемлишнее
                        model.save(); 
}
        }
    };

//            var addEmp = new EmpForm();    
//		addEmp. = self.qEmpList.human_id;
//		artst.showModal(refresh);

        };

     
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
