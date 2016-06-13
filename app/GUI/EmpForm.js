/**
 * 
 * @author Пользователь
 * @module EmpForm
 */
define('EmpForm', ['orm', 'forms', 'ui', 'resource', 'invoke', 'id'],
        function (Orm, Forms, Ui, Resource, Invoke, Id, ModuleName) {
            function module_constructor(userId) {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);
                var aUserId = userId;
                var onSucsess;
                form.panel5.height = null;
                form.panel2.height = null;
                var saveCareer = [];
                var user = {};
                user.career = [];
                user.education = [];

//                var setSkills = arguments[0];
//                model.qSkillsById.params.skills_id = setSkills.skills_id;

                function saveCallback() {
                    model.save();
                }

                function onShow() {
                    require(['Education', 'Career', 'forms/box-pane'], function (Edu, Career, Bp) {
                        for (var i = 0; i < model.qEdu.length; i++) {
                            var edu = new Edu(model.qEdu[i]);
                            user.education.push(edu.getInfo);
                            edu.showOn(form.panel2);
                        }
                        for (var j = 0; j < model.qCarrer.length; j++) {
                            var career = new Career(model.qCarrer[j]);
                            saveCareer.push(career.save);
                            user.career.push(career.getInfo);
                            career.showOn(form.panel5);
                        }

                        form.email.field = "email";
                        form.phone.field = "phonenumber";
                        form.socpage.field = "socialpage";
                        form.email.data = model.human[0].contact;
                        form.phone.data = model.human[0].contact;
                        form.socpage.data = model.human[0].contact;



                        var pnlDiv = new Bp();
                        pnlDiv.height = 1;
                        pnlDiv.background = Ui.Color.BLACK;
                        form.panel8.add(pnlDiv);

                        var pnlDiv2 = new Bp();
                        pnlDiv2.height = 300;
                        pnlDiv2.width = 1;
                        pnlDiv2.background = Ui.Color.BLACK;
                        form.panel82.add(pnlDiv2);
                        if (model.human[0].icon) {
                            Ui.Icon.load(model.human[0].icon, function (uploadedFile) {
                                form.photo.icon = uploadedFile;
                            }, function (e) {
                                console.log(e);
                            });
                        }

//                        if (!model.human[0].psyhotypes_id) {
//                            model.qTypes.push({});
//                            model.human[0].psyhotypes_id = model.qTypes.cursor.psyhotypes_id;
//                        }

                    });
                }


                //Названия бы получше придумать
                function preShow() {
                    if (aUserId) {
                        model.human.params.human_id = aUserId;
                    }
                    model.requery(function () {
                        if (model.human.length === 0) {
                            var contactsId = Id.generate();
                            model.human.push({contacts_id: contactsId});
                            model.qContacts.push({contacts_id: contactsId});
                        }
                        onShow();
                    });
                }


                self.show = function (callback) {
                    onSucsess = callback;
                    preShow();
                    form.show();
                };



                self.showModal = function (callback) {
                    onSucsess = callback;
                    preShow();
                    form.showModal();
                };

                form.btnPhoto.onActionPerformed = function (event) {
                    var fileFilter = ".png,.ico,.gif,.jpg";
                    Ui.selectFile(function (aFile) {
                        var loading;
                        if (loading == null) {
                            if (aFile != null) {
                                loading = Resource.upload(aFile, aFile.name,
                                        function (aUrl) {
                                            //We have uploaded only one file, but the system
                                            //return's us a array of urls
                                            loading = null;
                                            model.human[0].icon = aUrl[0];
                                            Ui.Icon.load(aUrl[0], function (uploadedFile) {
                                                form.photo.icon = uploadedFile;

                                            }, function (e) {
                                                console.log(e);
                                            });
                                        },
                                        function (aEvent) {
                                        },
                                        function (aError) {
                                            loading = null;
                                            alert("Uploading is aborted with message: " + aError);
                                        }
                                );
                            } else
                                alert("Select a file please...");
                        } else
                            alert("Wait please while current upload ends!");
                    }, fileFilter);
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
                    model.save(function () {
                        for (var i = 0; i < saveCareer.length; i++) {
                            var fn = saveCareer[i];
                            fn();
                        }
                    });
                };

                form.btnClose.onActionPerformed = function (event) {
                    onSucsess();
                    form.close();
                };


                form.onWindowClosed = function (event) {
//                    onSucsess();
                };
                form.export.onActionPerformed = function () {

                    user.surname = form.surname.value;
                    user.name = form.hname.value;
                    user.middlename = form.middlename.value;

                    var now = new Date();
                    var nowYear = now.getFullYear();

                    var birthdate = form.modelDate.value;
                    var birthYear = birthdate.getFullYear();

                    user.age = nowYear - birthYear;

                    user.phone = form.phone.value;
                    user.email = form.email.value;
                    user.socpage = form.socpage.value;

                    user.soctype = form.soctypes.text;
                    user.psytype = form.ptypes.text;
                    user.icon = model.human[0].icon;
                    user.skills = form.modelGridSkills.data;

//                    user.interests  = form.modelGridSkills.data;


//                        

//                      skillslevel[i] = form.modelGridSkills.data[i].level;
//                      





                    require(['temp'], function (Temp) {
                        var temp = new Temp(user);
                        temp.show();
                    });
                };


                form.btnRecoms.onActionPerformed = function (event) {
                    require(['Recoms'], function (Recom) {
//                        var recom = new Recom();
//                        recom.show();
//                        
//                         var recom = new Recom(model.qRecoms);
////                       user.education.push(edu.getInfo);
//                         recom.show();

                        var recom;
                        if (model.qRecomsById.params.recom_id) {
                            recom = new Recom(model.qRecomsById.params.recom_id);

                        } else {
                            if (model.qRecomsById.length === 0) {
                                recom = new Recom(model.qRecomsById.push({}));
                            }else{
                                recom = new Recom();
                            }
                        }
                        recom.show();


                    });
                };

            }
            return module_constructor;
        });
