/**
 * 
 * @author Наталья
 * @module Career
 */
define(['orm', 'forms', 'ui', 'Jobs'], function (Orm, Forms, Ui, Jobs, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
                
        var career = arguments[0];
        model.qJobById.params.job_id = career.job_id;
                
        
        
        self.show = function () {
            form.show();
             require(['CaRew'],function(caRew){
               var carew = new caRew();
               carew.showOn(form.panel);                              
               
            });
            
            
        };
         self.showOn = function(aPanel){
            aPanel.add(form.view);
        };
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
       
       function callback(job) {
            model.qJobById.cursor = job;
            career.job_id = job.job_id;

        }
        
        form.jobname.onSelect = function () {
            var jobs = new Jobs();
            jobs.showModal(callback);
        };
                
        form.button.onActionPerformed = function(event) {
            require(['CaRew'],function(caRew){
               
               var carew = new caRew();
               carew.showOn(form.panel);
            });
        };
        
    }
    return module_constructor;
});
