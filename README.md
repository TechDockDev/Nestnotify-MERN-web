### API Endpoints Table

#### Authentication Endpoint Table (Admin/Seller/User)
| No. | API Route                   | Method | EndPoints                                                | 
| --- | --------------------------- | ------ | -------------------------------------------------------- | 
|  01 | User Sign Up                | POST   | http://localhost:5000/api/v1/user/signup                 | 
|  02 | User Sign In                | POST   | http://localhost:5000/api/v1/user/login                  | 
|  03 | User Sign Out               | GET    | http://localhost:5000/api/v1/user/logout                 | 
|  07 | User Password Change        | PUT    | http://localhost:5000/api/v1/user/password/update        |
|  08 | User Password Forgot        | POST   | http://localhost:5000/api/v1/user/password/forgot        |
|  09 | User Password Reset Token   | POST   | http://localhost:5000/api/v1/user/password/reset/:token  |

#### Admin Endpoints Table
| No. | API Route                   | Method | EndPoints                                                | 
| --- | --------------------------- | ------ | -------------------------------------------------------- | 
|  01 | Admin All Ques              | GET    | http://localhost:5000/api/v1/admin/question/all          | 
|  02 | Admin: New Property Form    | POST   | http://localhost:5000/api/v1/admin/new/propety/form      | 
|  03 | Admin: Seller Property Form | GET    | http://localhost:5000/api/v1/admin/suffle/property/form  | 
|  04 | Admin: Suffle Form Ques     | PUT    | http://localhost:5000/api/v1/admin/suffle/property/form  | 

#### Seller Endpoints Table
| No. | API Route                   | Method | EndPoints                                                | 
| --- | --------------------------- | ------ | -------------------------------------------------------- | 
|  01 | Seller Get Property Form    | GET    | http://localhost:5000/api/v1/seller/get/property/form    |  


