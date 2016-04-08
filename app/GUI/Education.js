/**
 * 
 * @author Пользователь
 */
define('Education', ['orm', 'forms', 'ui', 'Courses']
        , function (Orm, Forms, Ui, Courses, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                var education = arguments[0];
                model.qEduCourcesById.params.cource_id = education.educourses_id;
                form.name.data = education;
                form.name.field = "eduname";

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

                form.course.onSelect = function () {
                    var cources = new Courses();
                    cources.showModal(callback);
                };

            }
            return module_constructor;
        });
