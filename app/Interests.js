/**
 * 
 * @author Наталья
 * @module Interests
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
         self.showOn = function(aPanel){
            aPanel.add(form.view);
        };
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
