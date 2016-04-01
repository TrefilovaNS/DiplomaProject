/**
 * 
 * @author Пользователь
 * @module Education
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        var education = arguments[0];

        model.qEduByID.params.edu_id = education.education_id;
        model.qEduCourses.params.course_id = education.educourses_id;
        //model.qEdu = education;
//        model.qEdu.params.human_id = education.human_id;
        form.name.data = education;
        form.name.field = "eduname";
//
//        form.entDate.data = education;
//        form.entDate.field = "entrydate";
//
//        form.endDate.data = education;
//        form.endDate.field = "graduationdate";

//        form.course.data = model.qEdu[0].course;
//        form.course.field = "coursename";
////        
//        form.degree.data = education;
//        form.degree.displayField = "degree";
//        form.degree.displayList = "qEduDegree";
//        form.degree.field = "human_id";

        self.show = function () {

            form.show();
        };

        self.showOn = function (aPanel) {
            aPanel.add(form.view);
        };
        // TODO : place your code here

        model.requery(function () {
            if (model.qEduCourses.length < 1) {
                model.qEduCourses.push({});
               model.qEduByID[0].educourses_id = model.qEduCourses[0].educourses_id;
            }
        });

        form.name.onValueChange = function (event) {
        };

        form.button.onActionPerformed = function (event) {
            model.qEduCourses;
            form.button.text;
            model.save();
        };

    }
    return module_constructor;
});
