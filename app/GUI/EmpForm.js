/**
 * 
 * @author Пользователь
 * @module EmpForm
 */
define(['orm', 'forms', 'ui', 'invoke'], function (Orm, Forms, Ui, Invoke, ModuleName) {
    function module_constructor(userId) {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        var aUserId = userId;
        var onSucsess;
        var types = arguments[0];
        
        var saveCareer=[];
        //соц
        model.qSocTypesById.params.socionicstypes_id = types.socionicstypes_id;
       
        
        
        function saveCallback(){
            model.save();
        }
        
        function onShow() {
//            require(['Education', 'Interests', 'Skills', 'forms/box-pane', 'Career'], function (Edu, Intrst, Skll, Bp, Career) {
            require(['Education','Career'], function (Edu, Career) {
                model.qEdu.params.human_id = model.human[0].human_id;
                model.qEdu.requery(function () {
                    for (var i = 0; i < model.qEdu.length; i++) {
                        var edu = new Edu(model.qEdu[i]);
                        edu.showOn(form.panel2);
                    }
                });
                
                model.qCarrer.params.human_id = model.human[0].human_id;
                model.qCarrer.requery(function(){
                    for (var j = 0; j < model.qCarrer.length; j++) {
                        var career = new Career(model.qCarrer[j]);
                        saveCareer.push(career.save);
                        career.showOn(form.panel5);
                    }
                });
                        
                form.email.data = model.human[0].contact;
                form.email.field = "email";
                form.phone.data = model.human[0].contact;
                form.phone.field = "phonenumber";
                form.socpage.data = model.human[0].contact;
                form.socpage.field = "socialpage";
                
                //соц
                form.soctypes.displayList = model.qSocTypes;
                form.soctypes.displayField = 'stype';


//                var pnlDiv = new Bp();
//                pnlDiv.height = 1;
//                pnlDiv.background = Ui.Color.BLACK;
//                form.panel8.add(pnlDiv);
//
//                var pnlDiv2 = new Bp();
//                pnlDiv2.height = 300;
//                pnlDiv2.width = 1;
//                pnlDiv2.background = Ui.Color.BLACK;
//                form.panel82.add(pnlDiv2);

//                var intrst = new Intrst();
//                intrst.showOn(form.panel7);
//
//                var skll = new Skll();
//                skll.showOn(form.panel6);
//
//                var career = new Career();
//                career.showOn(form.panel5);

            });
        }
        self.show = function () {
//            form.maximizable = true;
//            form.undecorated = true;
            //form.maximize();
            model.human.params.human_id = aUserId;
            model.requery(function () {
                if (!model.human) {
                    model.human.push({});
                    model.qContacts.push({});
//                    model.qTypes.push({});
//                    model.qSocTypes.push({});
//                    model.qPsyTypes.push({});
                      //соц
                    if (types.socionicstypes_id) {
                        form.soctypes.value = model.qSocTypesById.find({socionicstypes_id: types.socionicstypes_id})[0];
                        console.log(form.soctypes.value);
                    }
                }
                onShow();
            });

            form.show();

        };
           //соц
        form.soctypes.onValueChange = function () {
                    if (form.soctypes.value) {
                        types.socionicstypes_id = form.soctypes.value.socionicstypes_id;
                    }
                };
                
        self.showModal = function (callback) {
            form.maximizable = true;
//            form.undecorated = true;
            Invoke.later(function () {
                form.maximize();
            });

            onSucsess = callback;
            if (aUserId) {
                model.human.params.human_id = aUserId;
            }
            model.requery(function () {

                if (model.human.length === 0) {
                    model.human.push({});
                    model.qContacts.push({});
//                    model.qTypes.push({});
//                    model.qSocTypes.push({});
//                    model.qPsyTypes.push({});
                }
                onShow();
            });

            form.showModal();
            //onShow();
        };


        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });

        form.button.onActionPerformed = function (event) {
            require(['Education', 'forms/box-pane'], function (Edu, Bp) {
                
                var index = model.qEdu.push({});
                model.qEdu[index - 1].human_id = model.human[0].human_id;
                var edu = new Edu(model.qEdu[index - 1]);
                edu.showOn(form.panel2);
                var pnlDiv = new Bp();
                pnlDiv.height = 1;
                pnlDiv.background = Ui.Color.BLACK;
                form.panel2.add(pnlDiv);
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

        form.addCareer.onActionPerformed = function (event) {
            require(['Career', 'forms/box-pane'], function (Career, Bp) {
                var pnlDiv = new Bp();
                pnlDiv.height = 1;
                pnlDiv.background = Ui.Color.BLACK;
                form.panel5.add(pnlDiv);
                var index = model.qCarrer.push({});
               model.qCarrer[index - 1].human_id = model.human[0].human_id;
                var career = new Career(model.qCarrer[index - 1]);
                career.showOn(form.panel5);
                
//                var career = new Career();
//                career.showOn(form.panel5);
            });
        };
        form.btnSave.onActionPerformed = function (event) {
//             model.human.schema.human_id = 1;
            model.save();
            for (var i = 0; i <saveCareer.length ; i++) {
              var fn =   saveCareer[i];
              fn();
            }
        };

        form.btnClose.onActionPerformed = function (event) {
            form.close();
        };


        form.onWindowClosed = function (event) {
            onSucsess();
        };

    }
    return module_constructor;
});
