### API Endpoints Table


#### Super Admin Endpoints Table
| No. | API Route                              | Method | EndPoints                                                              | 
| --- | -------------------------------------- | ------ | ---------------------------------------------------------------------- | 
| 001 | Super Admin: Sign In                   | POST   | http://localhost:5000/api/v1/super/admin/singin                        |   
| 002 | Super Admin: Sign Out                  | GET    | http://localhost:5000/api/v1/super/admin/signout                       |
| 003 | Super Admin: Password Change           | PUT    | http://localhost:5000/api/v1/super/admin/password/update               |
| 004 | Super Admin: New Admin Register        | POST   | http://localhost:5000/api/v1/super/admin/new/admin                     |


#### Admin Endpoints Table
| No. | API Route                              | Method | EndPoints                                                              | 
| --- | -------------------------------------- | ------ | ---------------------------------------------------------------------- |
| 001 | Admin: Sign In                         | POST   | http://localhost:5000/api/v1/admin/signin                              |   
| 002 | Admin: Sign Out                        | GET    | http://localhost:5000/api/v1/admin/singout                             | 
| 003 | Admin: Get Profile Data                | GET    | http://localhost:5000/api/v1/admin//get/profile/data                   |
| 004 | Admin:                                 |        |                                                                        |
| 005 | Admin:                                 |        |                                                                        |
| 006 | Admin:                                 |        |                                                                        |
| 007 | Admin: Password Change                 | PUT    | http://localhost:5000/api/v1/admin/password/update                     |
| 008 | Admin: Password Forgot                 | POST   | http://localhost:5000/api/v1/admin/password/forgot                     |
| 009 | Admin: Password Reset Token            | POST   | http://localhost:5000/api/v1/admin/password/reset/:token               |
| 010 | Admin: Admin Account Enable/Disable    | PUT    | http://localhost:5000/api/v1/admin/admin/account/modify/:id            |
| 011 | Admin: User Account Enable/Disable     | PUT    | http://localhost:5000/api/v1/admin/user/account/modify/:id             |
| 012 | Admin: Get All Users                   | GET    | http://localhost:5000/api/v1/admin/all/users                           | 
| 013 | Admin: Get All Admins                  | GET    | http://localhost:5000/api/v1/admin/all/admins                          |
| 014 | Admin: Get All Sellers                 | GET    | http://localhost:5000/api/v1/admin/all/sellers                         | 
| 015 | Admin: Get All Buyers                  | GET    | http://localhost:5000/api/v1/admin/all/buyers                          |
| 016 | Admin: Get All Renters                 | GET    | http://localhost:5000/api/v1/admin/all/renters                         | 
| 017 | Admin: Get All Landlords               | GET    | http://localhost:5000/api/v1/admin/all/landlords                       |
| 018 | Admin: Get All Investers               | GET    | http://localhost:5000/api/v1/admin/all/invertors                       |
| 019 | Admin: Get Single User                 | GET    | http://localhost:5000/api/v1/admin/get/user/profile/:id                |
| 020 | Admin: Seller Property Form            | GET    | http://localhost:5000/api/v1/admin/shuffle/seller/property/form        |
| 021 | Admin: Seller Residential Home         | GET    | http://localhost:5000/api/v1/admin/seller/residential/home/form        | 
| 022 | Admin: Seller Residential Condo        | GET    | http://localhost:5000/api/v1/admin/seller/residential/condo/form       | 
| 023 | Admin: Seller Commerical Form          | GET    | http://localhost:5000/api/v1/admin/seller/commercial/form              | 
| 024 | Admin: Buyer Residential Home          | GET    | http://localhost:5000/api/v1/admin/buyer/residential/home/form         | 
| 025 | Admin: Buyer Residential Condo         | GET    | http://localhost:5000/api/v1/admin/buyer/residential/condo/form        | 
| 026 | Admin: Buyer Commerical Form           | GET    | http://localhost:5000/api/v1/admin/buyer/commercial/form               | 
| 027 | Admin: Suffle Seller Property Form     | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/property/form        |
| 028 | Admin: Suffle Seller Residential Home  | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/resihome/form        |
| 029 | Admin: Suffle Seller Residential Condo | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/resicondo/form       |
| 030 | Admin: Suffle Seller Commerical Form   | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/commercail/form      |
| 031 | Admin: Suffle Buyer Residential Home   | PUT    | http://localhost:5000/api/v1/admin/shuffle/buyer/resihome/form         |
| 032 | Admin: Suffle Buyer Residential Condo  | PUT    | http://localhost:5000/api/v1/admin/shuffle/buyer/resicondo/form        |
| 033 | Admin: Suffle Buyer Commerical Form    | PUT    | http://localhost:5000/api/v1/admin/shuffle/buyer/commercail/form       | 


#### Authentication Endpoint Table (User)
| No. | API Route                              | Method | EndPoints                                                              | 
| --- | -------------------------------------- | ------ | ---------------------------------------------------------------------- | 
| 001 | User Sign Up                           | POST   | http://localhost:5000/api/v1/user/signup                               | 
| 002 | User Sign In                           | POST   | http://localhost:5000/api/v1/user/login                                | 
| 003 | User Sign Out                          | GET    | http://localhost:5000/api/v1/user/logout                               | 
| 003 | User: Password Change                  | PUT    | http://localhost:5000/api/v1/admin/password/update                     |
| 004 | User: Password Forgot                  | POST   | http://localhost:5000/api/v1/admin/password/forgot                     |
| 005 | User: Password Reset Token             | POST   | http://localhost:5000/api/v1/admin/password/reset/:token               |


#### Seller Endpoints Table
| No. | API Route                              | Method | EndPoints                                                              | 
| --- | -------------------------------------- | ------ | ---------------------------------------------------------------------- | 
| 001 | Seller New Property Form               | POST   | http://localhost:5000/api/v1/seller/new/property/form                  | 
| 002 | Seller Get Property Form               | GET    | http://localhost:5000/api/v1/sseller/get/property/form                 |
| 003 | Seller New Residential Home Form       | POST   | http://localhost:5000/api/v1/seller/new/residential/home/form          |
| 004 | Seller Get Residential Home Form       | GET    | http://localhost:5000/api/v1/seller/get/residential/home/form          |
| 005 | Seller New Residential Condo Form      | POST   | http://localhost:5000/api/v1/seller/new/residential/condo/form         |
| 006 | Seller Get Residential Condo Form      | Get    | http://localhost:5000/api/v1/seller/get/residential/condo/form         |
| 007 | Seller New Commercial Form             | POST   | http://localhost:5000/api/v1/seller/new/commercial/form                |
| 008 | Seller Get Commercial Form             | GET    | http://localhost:5000/api/v1/seller/get/commercial/form                |