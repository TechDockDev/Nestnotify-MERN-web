### API Endpoints Table


#### Super Admin Endpoints Table
| No. | API Route                              | Method | EndPoints                                                              | 
| --- | -------------------------------------- | ------ | ---------------------------------------------------------------------- | 
|  01 | Super Admin: Sign In                   | POST   | http://localhost:5000/api/v1/super/admin/singin                        |   
|  02 | Super Admin: Sign Out                  | GET    | http://localhost:5000/api/v1/super/admin/signout                       |
|  03 | Super Admin: Password Change           | PUT    | http://localhost:5000/api/v1/super/admin/password/update               |
|  04 | Super Admin: New Admin Register        | POST   | http://localhost:5000/api/v1/super/admin/new/admin                     |


#### Admin Endpoints Table
| No. | API Route                              | Method | EndPoints                                                              | 
| --- | -------------------------------------- | ------ | ---------------------------------------------------------------------- |
|  01 | Admin: Sign In                         | POST   | http://localhost:5000/api/v1/admin/signin                              |   
|  02 | Admin: Sign Out                        | GET    | http://localhost:5000/api/v1/admin/singout                             | 
|  03 | Admin: Get Profile Data                | GET    | http://localhost:5000/api/v1/admin//get/profile/data                   |
|  04 | Admin:                                 |        |                                                                        |
|  05 | Admin:                                 |        |                                                                        |
|  06 | Admin:                                 |        |                                                                        |
|  07 | Admin: Password Change                 | PUT    | http://localhost:5000/api/v1/admin/password/update                     |
|  08 | Admin: Password Forgot                 | POST   | http://localhost:5000/api/v1/admin/password/forgot                     |
|  09 | Admin: Password Reset Token            | POST   | http://localhost:5000/api/v1/admin/password/reset/:token               |
|  10 | Admin: Admin Account Enable/Disable    | PUT    | http://localhost:5000/api/v1/admin/admin/account/modify/:id            |
|  11 | Admin: User Account Enable/Disable     | PUT    | http://localhost:5000/api/v1/admin/user/account/modify/:id             |
|  12 | Admin: Get All Users                   | GET    | http://localhost:5000/api/v1/admin/all/users                           | 
|  13 | Admin: Get All Admins                  | GET    | http://localhost:5000/api/v1/admin/all/admins                          |
|  14 | Admin: Get All Sellers                 | GET    | http://localhost:5000/api/v1/admin/all/sellers                         | 
|  15 | Admin: Get All Buyers                  | GET    | http://localhost:5000/api/v1/admin/all/buyers                          |
|  16 | Admin: Get All Renters                 | GET    | http://localhost:5000/api/v1/admin/all/renters                         | 
|  17 | Admin: Get All Landlords               | GET    | http://localhost:5000/api/v1/admin/all/landlords                       |
|  18 | Admin: Get All Investers               | GET    | http://localhost:5000/api/v1/admin/all/invertors                       |
|  19 | Admin: Get Single User                 | GET    | http://localhost:5000/api/v1/admin/get/user/profile/:id                |
|  20 | Admin: Seller Property Form            | GET    | http://localhost:5000/api/v1/admin/shuffle/seller/property/form        |
|  21 | Admin: Seller Residential Home         | GET    | http://localhost:5000/api/v1/admin/seller/residential/home/form        | 
|  22 | Admin: Seller Residential Condo        | GET    | http://localhost:5000/api/v1/admin/seller/residential/condo/form       | 
|  23 | Admin: Seller Commerical Form          | GET    | http://localhost:5000/api/v1/admin/seller/commercial/form              | 
|  24 | Admin: Buyer Residential Home          | GET    | http://localhost:5000/api/v1/admin/buyer/residential/home/form         | 
|  25 | Admin: Buyer Residential Condo         | GET    | http://localhost:5000/api/v1/admin/buyer/residential/condo/form        | 
|  26 | Admin: Buyer Commerical Form           | GET    | http://localhost:5000/api/v1/admin/buyer/commercial/form               | 
|  27 | Admin: Suffle Seller Property Form     | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/property/form        |
|  28 | Admin: Suffle Seller Residential Home  | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/resihome/form        |
|  29 | Admin: Suffle Seller Residential Condo | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/resicondo/form       |
|  30 | Admin: Suffle Seller Commerical Form   | PUT    | http://localhost:5000/api/v1/admin/shuffle/seller/commercail/form      |
|  31 | Admin: Suffle Buyer Residential Home   | PUT    | http://localhost:5000/api/v1/admin/shuffle/buyer/resihome/form         |
|  32 | Admin: Suffle Buyer Residential Condo  | PUT    | http://localhost:5000/api/v1/admin/shuffle/buyer/resicondo/form        |
|  33 | Admin: Suffle Buyer Commerical Form    | PUT    | http://localhost:5000/api/v1/admin/shuffle/buyer/commercail/form       | 


#### Authentication Endpoint Table (User)
| No. | API Route                             | Method | EndPoints                                                              | 
| --- | ------------------------------------- | ------ | ---------------------------------------------------------------------- | 
|  01 | User Sign Up                          | POST   | http://localhost:5000/api/v1/user/signup                               | 
|  02 | User Sign In                          | POST   | http://localhost:5000/api/v1/user/login                                | 
|  03 | User Sign Out                         | GET    | http://localhost:5000/api/v1/user/logout                               | 
|  03 | User: Password Change                 | PUT    | http://localhost:5000/api/v1/admin/password/update                     |
|  04 | User: Password Forgot                 | POST   | http://localhost:5000/api/v1/admin/password/forgot                     |
|  05 | User: Password Reset Token            | POST   | http://localhost:5000/api/v1/admin/password/reset/:token               |

#### Seller Endpoints Table
| No. | API Route                             | Method | EndPoints                                                              | 
| --- | ------------------------------------- | ------ | ---------------------------------------------------------------------- | 
|  01 | Seller New Property Form              | POST   | http://localhost:5000/api/v1/seller/new/property/form                  | 
|  02 | Seller Get Property Form              | GET    | http://localhost:5000/api/v1/sseller/get/property/form                 |
|  03 | Seller New Residential Home Form      | POST   | http://localhost:5000/api/v1/seller/new/residential/home/form          |
|  04 | Seller Get Residential Home Form      | GET    | http://localhost:5000/api/v1/seller/get/residential/home/form          |
|  05 | Seller New Residential Condo Form     | POST   | http://localhost:5000/api/v1/seller/new/residential/condo/form         |
|  06 | Seller Get Residential Condo Form     | Get    | http://localhost:5000/api/v1/seller/get/residential/condo/form         |
|  07 | Seller New Commercial Form            | POST   | http://localhost:5000/api/v1/seller/new/commercial/form                |
|  08 | Seller Get Commercial Form            | GET    | http://localhost:5000/api/v1/seller/get/commercial/form                |