/**
 * 
 * @author Наталья
 */
define('Recoms', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor(recomID) {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        var aRecomID = recomID;
        model.qRecomsById.params.recom_id = aRecomID;

        
        self.show = function () {
            form.show();
        };
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
       

        function callbackTasks(tasks) {
            for (var i = 0; i < tasks.length; i++) {
                model.qTasksByRecom.push({tasks_id: tasks[i].tasks_id,
                    recom_id: recomID});
            }

        }


        form.btnInt.onActionPerformed = function (event) {
            require(['Tasks'], function (Tasks) {
                var task = new Tasks();
                task.showModal(callbackTasks);
            });
        };

        
        
        form.btnSave.onActionPerformed = function (event) {
                    model.save();
                };

       form.btnClose.onActionPerformed = function (event) {
                    form.close();
                };

    }
    return module_constructor;
});
