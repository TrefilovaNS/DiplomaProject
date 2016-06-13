/**
 *
 * @author Наталья
 * @name qEmpList
 * @public
 */ 
Select t1.human_id, (t1.hname || ' ' || t1.middlename || ' ' || t1.surname) AS fullName, t1.birthdate
From HUMAN t1