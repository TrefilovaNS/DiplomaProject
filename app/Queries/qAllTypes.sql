/**
 *
 * @author Наталья
 * @name qAllTypes
 * @public
 */ 
Select t.psyhotypes_id, q.stype, q1.ptype
From #qPsyTypes q1
, #qSocTypes q
 Inner Join PSYHOTYPES t on t.socionicstypes_id = q.socionicstypes_id
 and t.psyhosophytypes_id = q1.psyhosophytypes_id