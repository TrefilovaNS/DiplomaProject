/**
 * 
 * @author Наталья
 * @module Directions
 */
define('Directions',['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var callback;
        self.showModal = function (aCallback) {
        callback = aCallback;
            form.showModal();
        
          };
         model.requery(function () {
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
