/**
 * 
 * @author Наталья
 * @module EmpList
 */
define(['orm', 'forms', 'ui', 'EmpForm', 'logger'],
        function (Orm, Forms, Ui, EmpForm, Logger, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                var aCallback = function () {
                    Logger.info("Hello");
                    model.requery();
                };

                form.modelGrid.onMouseClicked = function (event) {
                    if (event.clickCount > 1) {
                        var empForm = new EmpForm(form.modelGrid.selected[0].human_id);
                        empForm.showModal(aCallback);
                    }
                };

                // TODO : place your code here
                function refresh() {
                    model.requery();
                }
                form.Add.onActionPerformed = function (event) {
                                                           
//                    for (var i = 0; i < model.qEmpList.length; i++) {
//                        var index = model.qEmpList.push({});
//                        var addEmp = new EmpForm(model.qEmpList[index]);
//                        addEmp.showModal(aCallback);
//                    }
               
//                    var addEmp = new EmpForm();
//                    addEmp.show();
//                    model.requery();
//            
                    form.Delete.onActionPerformed = function (event) {
                        if (confirm("Удалить?")) {
                            for (var i in form.modelGrid.selected) {
                                model.qEmpList.splice(model.qEmpList.indexOf(form.modelGrid.selected[i].human_id), 1);  //Удаляемлишнее
                                model.save();
                            }
                        }
                    };

//            var addEmp = new EmpForm();    
//		addEmp. = self.qEmpList.human_id;
//		artst.showModal(refresh);

                };


                model.requery(function () {
                    // TODO : place your code here
                });

            }
            return module_constructor;
        });
