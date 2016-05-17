/**
 * 
 * @author Наталья
 */
define('Recoms', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.btnSave.onActionPerformed = function (event) {
                    model.save();
                };

       form.btnClose.onActionPerformed = function (event) {
                    form.close();
                };

    }
    return module_constructor;
});
