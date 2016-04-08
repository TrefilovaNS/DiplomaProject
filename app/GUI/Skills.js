/**
 * 
 * @author Наталья
 * @module Skills
 */
define('Skills',['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
             model.requery(function(){
                if (model.human.length===0){
                   model.qSetSkills.push({});
                }
            });
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
