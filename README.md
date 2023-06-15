### API Endpoints Table


#### Authentication Endpoint Table (Admin/Seller/User)
| No. | API Route                          | Method | EndPoints                                                         | 
| --- | ---------------------------------- | ------ | ----------------------------------------------------------------- | 
|  01 | User Sign Up                       | POST   | http://localhost:5000/api/v1/user/signup                          | 
|  02 | User Sign In                       | POST   | http://localhost:5000/api/v1/user/login                           | 
|  03 | User Sign Out                      | GET    | http://localhost:5000/api/v1/user/logout                          | 
|  07 | User Password Change               | PUT    | http://localhost:5000/api/v1/user/password/update                 |
|  08 | User Password Forgot               | POST   | http://localhost:5000/api/v1/user/password/forgot                 |
|  09 | User Password Reset Token          | POST   | http://localhost:5000/api/v1/user/password/reset/:token           |


#### Admin Endpoints Table
| No. | API Route                          | Method | EndPoints                                                         | 
| --- | ---------------------------------- | ------ | ----------------------------------------------------------------- | 
|  01 | Super Admin: Role Modification     | PUT    | http://localhost:5000/super/admin/user/role/change/:id            | 
|  02 | Super Admin: User Account Delete   | DELETE | http://localhost:5000/super/admin/user/account/delete/:id         |  


#### Admin Endpoints Table
| No. | API Route                          | Method | EndPoints                                                         | 
| --- | ---------------------------------- | ------ | ----------------------------------------------------------------- | 
|  01 | Admin: Seller Property Form        | GET    | http://localhost:5000/api/v1/admin/seller/property/form           | 
|  02 | Admin: Seller Residential Home     | GET    | http://localhost:5000/api/v1/admin//seller/residential/home/form  | 
|  03 | Admin: Seller Residential Condo    | GET    | http://localhost:5000/api/v1/admin/seller/residential/condo/form  | 
|  04 | Admin: Seller Commerical Form      | GET    | http://localhost:5000/api/v1/admin/seller/commercial/form         | 
|  05 | Admin: Suffle Form Ques            | PUT    | http://localhost:5000/api/v1/admin/suffle/property/form           | 


#### Seller Endpoints Table
| No. | API Route                          | Method | EndPoints                                                         | 
| --- | ---------------------------------- | ------ | ----------------------------------------------------------------- | 
|  01 | Seller New Property Form           | POST   | http://localhost:5000/api/v1/seller/new/property/form             | 
|  01 | Seller Get Property Form           | GET    | http://localhost:5000/api/v1/sseller/get/property/form            |
|  01 | Seller New Residential Home Form   | POST   | http://localhost:5000/api/v1/seller/new/residential/home/form     |
|  01 | Seller Get Residential Home Form   | GET    | http://localhost:5000/api/v1/seller/get/residential/home/form     |
|  01 | Seller New Residential Condo Form  | POST   | http://localhost:5000/api/v1/seller/new/residential/condo/form    |
|  01 | Seller Get Residential Condo Form  | Get    | http://localhost:5000/api/v1/seller/get/residential/condo/form    |
|  01 | Seller New Commercial Form         | POST   | http://localhost:5000/api/v1/seller/new/commercial/form           |
|  01 | Seller Get Commercial Form         | GET    | http://localhost:5000/api/v1/seller/get/commercial/form           |

 


