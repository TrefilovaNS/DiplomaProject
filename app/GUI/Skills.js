/**
 * 
 * @author Наталья
 * @module Skills
 */
define('Skills', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
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

        self.showOn = function (aPanel) {
            aPanel.add(form.view);
        };

        form.btnAdd.onActionPerformed = function (event) {
            model.qSkills.push({});
        };

        form.btnSave.onActionPerformed = function () {
            model.save();
        };

        form.btnOK.onActionPerformed = function () {
            callback(form.modelGrid.selected);
            form.close();
        };

        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });

    }
    return module_constructor;
});
