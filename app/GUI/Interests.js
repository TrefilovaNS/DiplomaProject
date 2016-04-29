/**
 * 
 * @author Наталья
 * @module Interests
 */
define('Interests',['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
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
       
         self.showOn = function(aPanel){
            aPanel.add(form.view);
        };
        // TODO : place your code here
         form.btnAdd.onActionPerformed = function (event) {
            model.qInterests.push({});
        };
         form.btnSave.onActionPerformed = function () {
            
            model.save();
        };
        
        model.requery(function () {
            // TODO : place your code here
        });
         form.btnOK1.onActionPerformed = function () {
            callback(form.modelGrid.selected[0]);
            form.close();
        };
        
        
    }
       
    return module_constructor;
});
