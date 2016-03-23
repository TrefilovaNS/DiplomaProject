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
        form.name.data = education;
        form.name.field = "eduname";
        
        form.entDate.data = education;
        form.entDate.field = "entrydate";
       
        form.endDate.data = education;
        form.endDate.field = "graduationdate";
                  
//        form.course.data = model.qEdu.course;
//        form.course.field = "coursename";
////        
//        form.degree.data = education;
//        form.degree.displayField = "degree";
//        form.degree.displayList = "qEduDegree";
//        form.degree.field = "human_id";
        
        self.show = function () {
           
            form.show();
        };
        
        self.showOn = function(aPanel){
            aPanel.add(form.view);
        };
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.name.onValueChange = function(event) {
            console.log(education.eduname);
        };



    }
    return module_constructor;
});
