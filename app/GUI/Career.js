/**
 * 
 * @author Наталья
 * @module Career
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
             require(['CaRew'],function(caRew){
               var carew = new caRew();
               carew.showOn(form.panel);                              
               
            });
            
            
        };
         self.showOn = function(aPanel){
            aPanel.add(form.view);
        }
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.button.onActionPerformed = function(event) {
            require(['CaRew'],function(caRew){
               
               var carew = new caRew();
               carew.showOn(form.panel);
            });
        };
        
    }
    return module_constructor;
});
