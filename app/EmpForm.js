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
            form.maximizable = true;
            form.undecorated = true;
            //form.maximize();
            model.human.params.human_id = 1;
            model.requery(function(){
                if (model.human.length===0){
                    model.human.push({});
                    model.qContacts.push({});
                }
            });

            form.show();
            require(['Education', 'Interests', 'Skills', 'forms/box-pane', 'Career'], function (Edu, Intrst, Skll, Bp, Career) {
                var edu = new Edu();
                edu.showOn(form.panel2);


                var pnlDiv = new Bp();
                pnlDiv.height = 1;
                pnlDiv.background = Ui.Color.BLACK;
                form.panel8.add(pnlDiv);

                var pnlDiv2 = new Bp();
                pnlDiv2.height = 300;
                pnlDiv2.width = 1;
                pnlDiv2.background = Ui.Color.BLACK;
                form.panel82.add(pnlDiv2);

                var intrst = new Intrst();
                intrst.showOn(form.panel7);

                var skll = new Skll();
                skll.showOn(form.panel6);

                var career = new Career();
                career.showOn(form.panel5);

            });
        };

        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });

        form.button.onActionPerformed = function (event) {
            require(['Education', 'forms/box-pane'], function (Edu, Bp) {
                var pnlDiv = new Bp();
                pnlDiv.height = 1;
                pnlDiv.background = Ui.Color.BLACK;
                form.panel2.add(pnlDiv);
                var edu = new Edu();
                edu.showOn(form.panel2);
            });
        };

        form.button2.onActionPerformed = function (event) {
            require(['Interests'], function (Intrst) {
                var intrst = new Intrst();
                intrst.showOn(form.panel7);
            });
        };

        form.button21.onActionPerformed = function (event) {
            require(['Skills', 'forms/box-pane'], function (Skll, Bp) {
                var pnlDiv = new Bp();
                pnlDiv.height = 1;
                pnlDiv.background = Ui.Color.BLACK;
                form.panel6.add(pnlDiv);
                var skll = new Skll();
                skll.showOn(form.panel6);
            });
        };

        form.button1.onActionPerformed = function (event) {
            require(['Career', 'forms/box-pane'], function (Career, Bp) {
                var pnlDiv = new Bp();
                pnlDiv.height = 1;
                pnlDiv.background = Ui.Color.BLACK;
                form.panel5.add(pnlDiv);
                var career = new Career();
                career.showOn(form.panel5);
            });
        };
        
        form.btnSave.onActionPerformed = function(event) {
//             model.human.schema.human_id = 1;
            model.save();
        };

    }
    return module_constructor;
});
