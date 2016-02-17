/**
 * 
 * @author Пользователь
 * @module EmpForm
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
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
        
        form.button.onActionPerformed = function(event) {
            require(['Education','forms/box-pane'],function(Edu,Bp){
               var pnlDiv = new Bp();
               pnlDiv.height=1;
               pnlDiv.background = Ui.Color.BLACK;
               form.panel2.add(pnlDiv);
               var edu = new Edu();
               edu.showOn(form.panel2);
            });
        };

        
    }
    return module_constructor;
});
