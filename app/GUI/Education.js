/**
 * 
 * @author Пользователь
 * @module Education
 */
define(['orm', 'forms', 'ui', 'Courses', 'Directions']
        , function (Orm, Forms, Ui, Courses, Directions, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                var education = arguments[0];
                model.qEduCourcesById.params.cource_id = education.educourses_id;
                model.qEduDirById.params.dir_id = education.edudirections_id;
                
                form.name.data = education;
                form.name.field = "eduname";
                
                form.entDate.data = education;
                form.entDate.field = "entrydate";
                
                form.endDate.data = education;
                form.endDate.field = "graduationdate";

                self.show = function () {
                    form.show();
                };

                self.showOn = function (aPanel) {
                    aPanel.add(form.view);
                };

                model.requery(function () {
                    if (education.edudegree_id) {
                        form.degree.value = model.qEduDegree.find({edudegree_id: education.edudegree_id})[0];
                          console.log(form.degree.value);
                    }
                });

                form.degree.onValueChange = function () {
                    console.log(model);
                    console.log(form.degree.value);
                    console.log(education);
                    education.edudegree_id = form.degree.value.edudegree_id;
                };

                function callback(cource) {
                    model.qEduCourcesById.cursor = cource;
                    education.educourses_id = cource.educourses_id;
                    
                }
                
                function callbackDir (direction){
                    model.qEduDirById.cursor = direction;
                    education.edudirections_id = direction.edudirections_id;
                }

                form.course.onSelect = function () {
                    var cources = new Courses();
                    cources.showModal(callback);
                };

                 form.direction.onSelect = function () {
                    var directions = new Directions();
                    directions.showModal(callbackDir);
                };
            }
            return module_constructor;
        });
