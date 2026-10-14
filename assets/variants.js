// Variant field packs (brief §5). "review" = convention to be confirmed by a native/community reviewer.
window.BD_VARIANTS = {
 hindu:{name:"Hindu",theme:"maroon",inv:"॥ श्री गणेशाय नमः ॥",invOn:true,
  fields:[["gotra","Gotra"],["rashi","Rashi",{},1],["nakshatra","Nakshatra",{},1],["manglik","Manglik status",{},1],["birthTime","Time of birth",{},1],["birthPlace","Place of birth",{},1],["native","Native place"]],horo:true,
  sample:{name:"Ananya Sharma (Sample)",dob:"1997-03-14",height:"5 ft 4 in",edu:"B.Tech, Computer Science",job:"Software Engineer",city:"Pune",gotra:"Bharadwaj",rashi:"Mesh",nakshatra:"Ashwini",manglik:"No",birthTime:"06:40 AM",birthPlace:"Jaipur",native:"Jaipur, Rajasthan"}},
 marathi:{name:"Marathi",theme:"paithani",inv:"॥ श्री गणेशाय नमः ॥",invOpts:["॥ श्री गणेशाय नमः ॥","॥ श्री स्वामी समर्थ ॥","ॐ नमः शिवाय"],invOn:true,
  fields:[["gotra","Gotra"],["kul","Kul"],["kuldaivat","Kuldaivat"],["devak","Devak (optional; mainly Maratha, Kunbi, Mali families)",{},0,1],["ras","Ras",{},1],["nakshatra","Nakshatra + charan (1–4)",{},1],["gan","Gan (Dev / Manushya / Rakshas)",{},1],["nadi","Nadi (Aadya / Madhya / Antya)",{},1],["mangal","Mangal",{},1],["birthTime","Time of birth",{},1],["birthPlace","Place of birth",{},1],["native","Native village"],["mamakul","Maternal uncle's kul"]],horo:true,
  sample:{name:"Ketaki Joshi (Sample)",dob:"1996-08-02",height:"5 ft 3 in",edu:"M.Sc, Statistics",job:"Data Analyst",city:"Pune",gotra:"Kashyap",kul:"Joshi",kuldaivat:"(sample) Khandoba",native:"Wai, Satara",ras:"Kanya",nakshatra:"Hasta, charan 2",gan:"Dev",nadi:"Aadya",mangal:"No",mamakul:"Kulkarni (sample)",birthTime:"10:15 AM",birthPlace:"Pune"}},
 gujarati:{name:"Gujarati",theme:"bandhani",inv:"|| શ્રી ગણેશાય નમઃ ||",invOpts:["|| શ્રી ગણેશાય નમઃ ||","|| જય શ્રી કૃષ્ણ ||","|| જય સ્વામિનારાયણ ||"],invOn:true,
  fields:[["samaj","Samaj / gnati"],["gotra","Gotra"],["kuldevi","Kuldevi"],["native","Vatan (father's native place)"],["mosal","Mosal (maternal family's village)"],["mama","Maternal uncle's name"]],horo:true,
  sample:{name:"Hetal Patel (Sample)",dob:"1995-11-20",height:"5 ft 5 in",edu:"CA",job:"Chartered Accountant",city:"Ahmedabad",native:"Anand",mosal:"Nadiad",mama:"Mr. Jayesh Desai (Sample)",samaj:"",gotra:"",kuldevi:""}},
 tamil:{name:"Tamil",theme:"kolam",inv:"",invOn:false,
  fields:[["star","Natchathiram (star)",{},1],["rasi","Rasi",{},1],["gothram","Gothram"],["kuladeivam","Kula deivam"],["birthTime","Time of birth",{},1],["birthPlace","Place of birth",{},1]],horo:true,
  sample:{father:"Thiru. Raman S. (Sample), retired bank officer",mother:"Tmt. Lakshmi Raman (Sample), homemaker",name:"Karthik Raman (Sample)",dob:"1994-01-09",height:"5 ft 9 in",edu:"B.E., Mechanical",job:"Design Engineer",city:"Chennai",star:"Rohini",rasi:"Rishabam",gothram:"Kaundinya",kuladeivam:"",birthTime:"04:50 AM",birthPlace:"Madurai"}},
 muslim:{name:"Muslim",theme:"emerald",inv:"Bismillah-ir-Rahman-ir-Rahim",invOn:true,
  fields:[["maslak","Sect / maslak"],["biradari","Biradari (optional)"],["practice","Religious practice"],["native","Native place"]],horo:false,
  sample:{father:"Mr. Imran Qureshi (Sample), retired teacher",mother:"Mrs. Farah Qureshi (Sample), homemaker",diet:"Non-vegetarian (halal)",name:"Ayaan Qureshi (Sample)",dob:"1993-06-25",height:"5 ft 10 in",edu:"B.Tech, Civil",job:"Civil Engineer",city:"Hyderabad",maslak:"Sunni",biradari:"",practice:"Regular namaz, keeps roza",native:"Hyderabad",about:"Ayaan is a practising Muslim working as a civil engineer in Hyderabad. He values deen, family and education, and hopes to find a partner who shares these values."}},
 sikh:{name:"Sikh",theme:"navy",inv:"ੴ ਸਤਿ ਨਾਮੁ",invOn:true,
  fields:[["status","Amritdhari / Kesdhari"],["got","Got"],["community","Community (optional)"],["native","Native village"],["gurdwara","Gurdwara affiliation"]],horo:false,
  sample:{father:"S. Gurpreet Singh (Sample), businessman",mother:"Smt. Manjit Kaur (Sample), teacher",name:"Harleen Kaur (Sample)",dob:"1996-04-13",height:"5 ft 6 in",edu:"MBA",job:"Marketing Manager",city:"Ludhiana",status:"Kesdhari",got:"",community:"",native:"Kapurthala (sample)",gurdwara:"(sample) local gurdwara"}},
 christian:{name:"Christian",theme:"grace",inv:"“Love is patient, love is kind.” — 1 Corinthians 13:4",invOn:true,
  fields:[["denomination","Denomination"],["church","Home church / parish"],["diocese","Diocese"]],horo:false,
  sample:{father:"Mr. Joseph D'Souza (Sample), retired engineer",mother:"Mrs. Maria D'Souza (Sample), homemaker",diet:"Non-vegetarian",name:"Neha D'Souza (Sample)",dob:"1995-09-08",height:"5 ft 4 in",edu:"B.Sc Nursing",job:"Staff Nurse",city:"Mangaluru",denomination:"Catholic",church:"St. Anne's Parish (sample)",diocese:"Diocese of Mangalore"}},
 jain:{name:"Jain",theme:"saffron",inv:"णमो अरिहंताणं",invOn:true,
  fields:[["sect","Sect"],["gotra","Gotra"],["kul","Kul"],["community","Community"],["diet","Diet"]],horo:true,
  sample:{name:"Rishabh Shah (Sample)",dob:"1994-12-03",height:"5 ft 8 in",edu:"B.Com, CS",job:"Company Secretary",city:"Mumbai",sect:"Shwetambar",gotra:"",kul:"",community:"",diet:"Jain vegetarian"}},
 nri:{name:"NRI",theme:"minimal",inv:"",invOn:false,
  fields:[["country","Current country / city"],["visa","Citizenship / visa status"],["relocate","Willing to relocate"],["native","Native place in India"],["tz","Best time to call (time zone)"]],horo:false,
  sample:{father:"Mr. Anil Mehta (Sample), chartered accountant",mother:"Mrs. Kavita Mehta (Sample), teacher",name:"Rohan Mehta (Sample)",dob:"1992-07-17",height:"5 ft 11 in",edu:"MS, Computer Science",job:"Software Engineer",city:"Toronto",country:"Toronto, Canada",visa:"Permanent Resident",relocate:"Open to discuss",native:"Indore",tz:"Evenings IST (mornings ET)"}}
};
window.BD_CORE=[["name","Full name"],["dob","Date of birth"],["height","Height"],["edu","Education"],["job","Profession"],["employer","Employer (optional)"],["income","Income (optional / range)"],["city","City"],["diet","Diet"],["hobbies","Hobbies"],["father","Father"],["mother","Mother"],["siblings","Siblings"],["about","About me"],["expect","Partner expectations"],["contact","Contact person"],["phone","Contact number / email"]];
window.BD_SAMPLE_COMMON={father:"Mr. Suresh (Sample), retired bank officer",mother:"Mrs. Meena (Sample), homemaker",siblings:"1 younger brother, studying",diet:"Vegetarian",hobbies:"Music, trekking, cooking",about:"A warm, family-oriented person who enjoys music and weekend treks, values honesty, and believes in growing together with a partner who respects both careers and traditions.",expect:"We hope to connect with a well-educated, kind-hearted family with similar values.",contact:"Father",phone:"+91 00000 00000 (demo)"};

window.BD_LANGS={en:"English"};
window.BD_SOON=["हिन्दी (Hindi)","मराठी (Marathi)","ગુજરાતી (Gujarati)","বাংলা (Bengali)","മലയാളം (Malayalam)"];
