MODULENTS

Project was aimed to building a full-stack web-application which will serve as a marketplace for freelancers to find jobs - similar to Fiverr. However, the differentiating factor here would be allowing freelancers to find work as a team, rather than just bidding for work alone. Companies will also be able to filter and hire small groups of freelancers which serve as nuclear teams for ad-hoc jobs and projects that require varying skillsets.

2 types of users in a marketplace = Company Admin and Freelancer

Features / Functions / Use cases
Company Admin
- Login credentials and authentication for 1 admin (for now)
- View applicants resume / profile / portfolio
- Create project record
- Edit project record
- Delete project record

Freelancer:
- View open projects from companies
- Apply for projects in different companies - Dashboard should reflect both open projects posted by Admin AND their portfolio.
- Create portfolio - list projects completed
- Edit portfolio
- Delete portfolio

Initial Plan: 
To build a common BE and separate FE for both the Company Admin and the Freelancers. However, the effort was a bit too heavy. Hence, decided to scale down the MVP to have a user be able to both post and apply for projects listed.

Supposed WireFrame:
![Screenshot 2023-09-02 at 2 27 16 AM](https://github.com/brandontjl/ga-seif-project-4/assets/126410991/9160bd1c-a5b5-4d72-adf5-37507966ac18)

Current FrontEnd Rendering:
Login / Registration Page
![Screenshot 2023-09-02 at 2 22 07 AM](https://github.com/brandontjl/ga-seif-project-4/assets/126410991/867ab8c7-6425-4ee7-b247-24cf7affefbb)

HomePage / Profile Page
![Screenshot 2023-09-02 at 2 21 53 AM](https://github.com/brandontjl/ga-seif-project-4/assets/126410991/3963a0ed-46f3-4189-980f-1d46f9047c12)

Functionalities working:
- Registration
- Login

Pending Completion:
- Bugs with regards to adding Portfolio and Projects - having to revisit which impacts the listing of said elements as well
- Logout Button
- Application Button

Roadmap:
- Chat function between freelancers and between company admins
- Filter by projects and skill sets
- Pairing algorithm for different skill sets

Technologies Used:
- MongoDB
- Express and Node JS
- React
- Multer
- TailWinds CSS

