'use strict';

const fetch = require('node-fetch');

//Basic get request
//  get penguin request as html as a string
//    then log it
// fetch("https://www.google.com/search?q=penguins")
//      .then(res => res.text())
//      .then(body => {
//         console.log("1");
//         console.log(body);
//      });



//Basic post request
//start assembling the json payload
// var jsonPayload = {
//     action: "Incorrect Answer",
//     category: "Activity",
//     data: {
//       actEndp: "psych/schacter4e/4a__sensation_and_perception_a_49BEAE_ag.txt",
//       answer: "1",
//       fqUid: "C29DA2",
//       questionType: "MC",
//       uuid: "49BEAE",
//       userData: {
//         activity_questions_received: 24,
//         activity_started: true,
//         completed_students: 0,
//         due_date_has_passed: 1,
//         participating_students: 0,
//         started_students: 0,
//         user_activity_scores: [],
//         user_due_date: "Sep 11 at 7:30 AM",
//         user_due_date_array: [],
//         user_due_date_has_passed_array: [],
//         user_email_array: [],
//         user_grade_array: [],
//         user_id: "9063850",
//         user_id_array: [],
//         user_name_array: [],
//         user_questions_received: [],
//         user_rights: "1_student",
//         user_rights_array: []
//       }
//     },
//     op: "logAnalyticsEvent"
// };

var jsonPayload = JSON.stringify({
  "op":"logAnalyticsEvent",
  "action":"Correct Attempt",
  "category":"Activity",
  "data":{
    "userData":{
      "user_rights":"1_student",
      "user_id":"9063850",
      "activity_questions_received":21,
      "user_due_date":"Sep 11 at 7:30 AM",
      "due_date_has_passed":1,
      "participating_students":0,
      "started_students":0,
      "completed_students":0,
      "user_id_array":[],
      "user_email_array":[],
      "user_name_array":[],
      "user_rights_array":[],
      "user_due_date_array":[],
      "user_due_date_has_passed_array":[],
      "user_grade_array":[],
      "user_activity_scores":[],
      "user_questions_received":[],
      "activity_started":true,
      "activity_questions_correct":20
    },
    "fqUid":"D60781",
    "answer":"",
    "questionType":"FB",
    "uuid":"49BEAE",
    "actEndp":"psych/schacter4e/5a__the_mysteries_and_nature_o_DCE074_ag.txt"
  }
});

//make headers for post request
var headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie":
     "BHBrowserCheck=1; "
    +"bhdomain=onyx103423; "
    +"_ga=GA1.1.184533633.1535604771; "
    +"_ga=GA1.2.184533633.1535604771; "
    +"_gid=GA1.2.1081743320.1536643719; "
    +"_gid=GA1.1.1081743320.1536643719; "
    +"8466914_currentChapterId=PX_MULTIPART_LESSONS; "
    +"syllabusfilter_module_8466914=module_pdx_schacter4e_05; "
    +"syllabusfilter_8466914=schacter4e_lc_05a; "
    +"AZT=~q2kiAAAAAAAxdMzpB_T07A.E3_JIWEokmM5w_8VJva7CB; "
    +"pxpuente=ExpirationDate=02/27/2019; "
    +"pxrole=student; "
    +"BHAUTH=ECF7E9CE37E271695486E8010B0CE1D48FDB826D6072A0CC1088EA44282328607902CBB1D0F0830C74874E5498364B5FE196F2AD1CA0B38E7DAB62C4BC38DEDF5381E368C7DBE38065989FE462E1CC308E2AEAD76A3103DE56A1414CE3AC9540816EB72E303769BB4617CCD743DEB493CFD140375DD1049141952840D29A58CA96A06C48AB6687E3D4A18C1F7BBA067F9B63AC88D0EE08782B8403B84751A5FD9B273CFA2AF488278635B24F0F7A005AFA19A77C82A49FCEEDE31921C0BE181A942356F456D065BFE2697FAFC85DA3F6E58E8699697FA3AB960EB990F7DCD5B3B5B920CDB8A2081CA10B34A78866DAEFC59D595486422A31E4BDA0373DAE4E3E17BC5FC03CC35C3604A68605CBA13DD700AE376920246E701A2F30C001EEF7342CBA335D20A93109B2E32B823C9F5C00D446DE27EFF907B2500ACBF576FA975F33CD3D1F1DB699AF56F4D0B2E1C40C1FE427EE82EC84F35AB91BC594F728DFBE2D57C261D2856CCAF61C1907EA89643F5CC8A4C8253D07C22FB336CD365BD5E520A989219DE1F97C88C09E1570E65B1454388EC27E3990CB9EB75F09D2B667B15054017552F7EE3E64BDE03AE77BA9E7AFA927F7D8E04D7BF10342C12FBE75F71E4E6D4A"
    +"pxauth=E58D3A8E29ED42DE1B4927A0ACDFD3340E2E10ED98856BD376034DACFF135E73A427BF05543008DF54AE1D80E057E4655D74198C4E39941423EA93E75D75CD7AFAE99C6EE9835DF1A93663D3C93E4A385FBA0E86C1DF478AAB4F2B326277524F9306EC006D96EBF9AA1A2D6BB99BF7CD381DD28D"
}
//combine it all into a JSON object to pass as a paramter for the post function
var fetchJSON = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(jsonPayload)
}

var url = "http://www.macmillanhighered.com/launchpad/schacter4e/8466914/Sco/PutStudentScoData";

fetch(url, fetchJSON)
    .then(res => console.log(res.status));

     /*
     .then(header => {
        console.log(header);
     });
     */
