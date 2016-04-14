/**
 * 
 * @author Наталья
 * @module Career
 */
define(['orm', 'forms', 'ui', 'Jobs', 'Posts', 'Dismissions'], function (Orm, Forms, Ui, Jobs, Posts, Dismissions, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
                
        var career = arguments[0];
        model.qJobById.params.job_id = career.job_id;
        model.qPostById.params.post_id = career.post_id;
        model.qDismisById.params.dismis_id = career.dismission_id;
//        model.qDismisById.cursor.dismisdate = career.dismisdate;
        
        form.entryDate.data = career;
        form.entryDate.field = "entrydate";
        
        form.dismisDate.data = career;
        form.dismisDate.field = "dismisdate";
        
        
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
        form.reason.onSelect = function () {
            var dismis = new Dismissions();
            dismis.showModal(callbackDis);
        };
        
        function callbackDis(dismisreason){
           model.qDismisById.cursor = dismisreason;
           career.dismission_id = dismisreason.dismission_id;
       }
        
       form.postname.onSelect = function(){
           var posts = new Posts();
            posts.showModal(callbackPost);
       };
       
       function callbackPost(post){
           model.qPostById.cursor = post;
            career.post_id = post.post_id;
       }
       
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
