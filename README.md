To run the app locally  - 
step1 --  clone the repo ;
step2 --  run npm install ;
step3 -- run npm start ;
step4 -- go to locahost:3000 in your browser ; 


jobs response coming from given apis does not contain various important fields like comapny name,company logo img, work mode, date.

due to absence of company logo img in response , default logo of trumio has been added

due to absence of company name default name Company has been added, and also one of filters (search by company name) depends on company name, so this filter has no functionalty but is displayed in ui

due to absence of work Mode field in response , filtering that depends on work mode has no functionality but is displayed in ui

there is no date present in response object so the posted ago at the top of every job has been set to 10 days as default
