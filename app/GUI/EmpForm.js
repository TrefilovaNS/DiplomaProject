/**
 * 
 * @author Пользователь
 * @module EmpForm
 */
define('EmpForm', ['orm', 'forms', 'ui', 'invoke'],
        function (Orm, Forms, Ui, Invoke, ModuleName) {
            function module_constructor(userId) {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);
                var aUserId = userId;
                var onSucsess;

                var saveCareer = [];
                var user = {name: form.modelFormattedField1.value};
                user.career = [];

//                var setSkills = arguments[0];
//                model.qSkillsById.params.skills_id = setSkills.skills_id;

                function saveCallback() {
                    model.save();
                }

                function onShow() {
                    require(['Education', 'Career', 'forms/box-pane'], function (Edu, Career, Bp) {
                        for (var i = 0; i < model.qEdu.length; i++) {
                            var edu = new Edu(model.qEdu[i]);
                            edu.showOn(form.panel2);
                        }
                        for (var j = 0; j < model.qCarrer.length; j++) {
                            var career = new Career(model.qCarrer[j]);
                            saveCareer.push(career.save);
                            user.career.push(career.getInfo);
                            career.showOn(form.panel5);
                        }

                        form.email.data = model.human[0].contact;
                        form.email.field = "email";
                        form.phone.data = model.human[0].contact;
                        form.phone.field = "phonenumber";
                        form.socpage.data = model.human[0].contact;
                        form.socpage.field = "socialpage";

                        var pnlDiv = new Bp();
                        pnlDiv.height = 1;
                        pnlDiv.background = Ui.Color.BLACK;
                        form.panel8.add(pnlDiv);

                        var pnlDiv2 = new Bp();
                        pnlDiv2.height = 300;
                        pnlDiv2.width = 1;
                        pnlDiv2.background = Ui.Color.BLACK;
                        form.panel82.add(pnlDiv2);

                        if (!model.human[0].psyhotypes_id) {
                            model.qTypes.push({});
                            model.human[0].psyhotypes_id = model.qTypes.cursor.psyhotypes_id;
                        }

                    });
                }


                //Названия бы получше придумать
                function preShow() {
                    if (aUserId) {
                        model.human.params.human_id = aUserId;
                    }
                    model.requery(function () {
                        if (model.human.length === 0) {
                            model.human.push({});
                            model.qContacts.push({});
                        }
                        onShow();
                    });
                }


                self.show = function () {
                    preShow();
                    form.show();
                };



                self.showModal = function (callback) {
                    onSucsess = callback;
                    preShow();
                    form.showModal();
                };


                form.btnAddEducation.onActionPerformed = function (event) {
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

                form.btnInt.onActionPerformed = function (event) {
                    require(['Interests'], function (Intrst) {
                        var intrst = new Intrst();
                        intrst.showOn(form.panel7);
                    });
                };

                function callbackSkill(skills) {
                    for (var i = 0; i < skills.length; i++) {
                        model.qSkillsByHuman.push({skills_id: skills[i].skills_id,
                            human_id: userId});
                    }

                }

                function callbackIntrst(interests) {
                    for (var i = 0; i < interests.length; i++) {
                        model.qInterestsByHuman.push({setinterests_id: interests[i].setinterests_id,
                            human_id: userId});
                    }

                }

                form.btnSkill.onActionPerformed = function (event) {
                    require(['Skills'], function (Skll) {
                        var skll = new Skll();
//                        skll.showOn(form.panel6);
                        skll.showModal(callbackSkill);
                    });
                };
                form.btnInt.onActionPerformed = function (event) {
                    require(['Interests'], function (Intrst) {
                        var intrst = new Intrst();
                        intrst.showModal(callbackIntrst);
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
                    });
                };

                form.btnSave.onActionPerformed = function (event) {
                    model.save();
                    for (var i = 0; i < saveCareer.length; i++) {
                        var fn = saveCareer[i];
                        fn();
                    }
                };

                form.btnClose.onActionPerformed = function (event) {
                    form.close();
                };


                form.onWindowClosed = function (event) {
                    onSucsess();
                };
                form.export.onActionPerformed = function () {

//                    var pnl = document.getElementById("Main");
////                  pnl.innerHTML = "<h1>" +form.modelFormattedField1.value + "</h1>";
//                    form.view.showOn(pnl);
//                    form.view.element.innerHTML = "<h1>" + form.modelFormattedField1.value + "</h1>";
//                    Invoke.later(function(){
//                       form.undecorated = true;
//                       
//                       form.maximize(); 
//                    });

                    require(['temp'], function (Temp) {
                        var temp = new Temp(user);
                        temp.show();
                    });
                };


                form.btnRecoms.onActionPerformed = function (event) {
                    require(['Recoms'], function (Recom) {
                        var recom = new Recom();
                        recom.show();
                    });
                };

            }
            return module_constructor;
        });
