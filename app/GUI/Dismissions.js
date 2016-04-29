/**
 * 
 * @author Наталья
 * @module Dismissions
 */
define('Dismissions',['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        // TODO : place your code here
        
       var callback;
        self.showModal = function (aCallback) {
            callback = aCallback;
            form.showModal();
        };

        
        model.requery(function () {
            // TODO : place your code here
        });
         form.btnOK.onActionPerformed = function () {
            callback(form.modelGrid.selected[0]);
            form.close();
        };
        
        form.btnSave.onActionPerformed = function () {
            
            model.save();
        };
        
    }
    return module_constructor;
});
