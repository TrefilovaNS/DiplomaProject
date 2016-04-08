/**
 * 
 * @author jskonst
 */
define('temp', ['orm', 'forms', 'ui','invoke'], function (Orm, Forms, Ui,Invoke, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.maximizable = true;
            form.show();

           
        };
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
