# Radian
<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url] 
[![Forks][forks]][forks-url]
[![Starsgazers][Stars]][Stars-url]
# 
<div align="center">
  <a href="https://github.com/LucaBreebaart/Radian_Backend">
    <img src="radian\src\assets\favicon.ico" alt="Radian" width="200" height="auto">
  </a>

  <h3 align="center">Radian</h3>

  <p align="center">
    The all-in-one Online Inventory Tracking System
    <br />
    <a href="https://github.com/LucaBreebaart/Radian/tree/main/radian"><strong>Explore the files »</strong></a>
    <br />
    <br />
    <a href="add The demo Video Link here">View Demo</a>
    ·
    <a href="bug report link">Report Bug</a>
    ·
    <a href="Maybe">Request Feature</a>
  </p>
  <br />
</div>

## About this Project

Radian is a comprehensive application built with Angular for managing ingredient inventory across multiple locations. With these ingredients one is able to create recipes where they can further be used to craft products. With its intuitive interface and powerful features, Radian simplifies the process of tracking, editing, and updating ingredient and product information.

## Table of Contents

- [Built With](#built-with)
- [Installation](#installation-backend)

## Built With
* [![Angular][angular]][angular-url]
* [![Express][Express.js]][Express-url]
* [![PostgreSQL][postgresql]][postgresql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation Frontend

1. Clone the repo
   ```sh
   git clone https://github.com/LucaBreebaart/Radian.git
   ```
2. Re-direct to the correct file
   ```sh
   cd radian
   ```
3. Install packages with NPM
   ```sh
   npm i
   ```
   OR
   ```sh
   npm i --force
   ```
4. Start the Angular Application 
   ```sh
   ng serve
   ```
5. Open the App in your browser
   ```url
   http://localhost:4200/
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Installation Backend

1. Clone the repo
   ```sh
   git clone https://github.com/LucaBreebaart/Radian_Backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the backend server 
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features and Functionality

### Ingredient Management:

Radian provides a robust platform for managing ingredient inventory across multiple locations. Users can effortlessly track, edit, and update ingredient details, ensuring accurate and up-to-date information for crafting recipes and products.

### Product Crafting: 

Radian extends its functionality beyond ingredient management by enabling users to craft products using the created recipes. From this users now have the ability to create Products from their ingredients which can later be implemented into the online store.


### Admin Rights:

Radian incorporates admin rights management functionality to ensure effective platform security. Leveraging Angular's routing and authentication mechanisms, the application employs a dedicated AuthGuard service to restrict access to certain routes based on user privileges.

### Security

Radian prioritizes user security by implementing password hashing techniques and integrating Google reCAPTCHA for extra authentication.

Password Hashing:

- Upon user registration or login, Radian securely hashes passwords, to prevent unauthorized access and safeguard user credentials.
The AuthService ensures that passwords are securely stored and transmitted.

reCAPTCHA Integration:

- Radian utilizes the ng-recaptcha module to integrate Google reCAPTCHA into the login process, enhancing security and preventing automated bot attacks.

## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Wireframes
![Image Description](radian/assets/Wireframes.png)

### User flow and Sitemap breakdown and requirments
![Image Description](radian/assets/user%20flow%20and%20sitemap.png)

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process

<!-- stipulate all of the functionality you included in the project -->

#### 1. Angular Application Setup
- Angular CLI Installation: Initialized the project using Angular CLI.
- Project Structure: Organized the project structure according to Angular best practices.
- Angular Material Integration: Integrated Angular Material for UI components.
- Routing Configuration: Configured routing for different views and components.
#### 2. Component Development
- Dashboard Component: Created the dashboard component to display ingredient inventory across multiple locations.
- Card Component: Developed the card component to represent individual ingredients in the inventory.
- Edit Ingredient Component: Implemented the edit ingredient component to allow users to modify ingredient details.
- Login Component: Created the login component for user authentication.
```sh
            <re-captcha
                #captchaRef="reCaptcha"
                [siteKey]="'****'"
                (resolved)="resolved($event)">
            </re-captcha>
   ```
- Navigation Component: Developed the navigation component for easy navigation within the application.
#### 3. Service Integration
- HTTP Client Service: Implemented HTTP client service to communicate with the backend server for fetching and updating data.
- Authentication Service: Developed an authentication service to handle user login/logout functionality and user authentication.
- Ingredients Service: Created a service to manage ingredient-related operations such as fetching, updating, and adding ingredients.
- Location service: To get the current ingredients stock according to the selected location
```sh
export class LocationService {
  private selectedLocation: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.selectedLocation = sessionStorage.getItem('selectedLocation') || '';
    }
  }

  setSelectedLocation(location: string) {
    this.selectedLocation = location;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('selectedLocation', location);
    }
  }

  getSelectedLocation(): string {
    return this.selectedLocation;
  } 
}
   ```
<br><br/>

![Image Description](radian/assets/ERD.png)

#### 4. Backend Integration
- API Integration: Integrated with backend APIs to fetch and update database data.
```sh
const AppDataSource = new DataSource(
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": password,
        "database": "radian_db",
        "entities": ["src/entity/*.ts"],
        "logging": true,
        "synchronize": true
    }
)
   ```
- User Authentication: Implemented authentication mechanisms to secure user login and registration.
- Authorization: Implemented role-based authorization to control access to admin functionalities.
#### 5. Features and Functionality
- Inventory Management: Developed functionality to manage ingredient inventory across multiple locations.
- User Authentication: Implemented secure user authentication with hashed passwords and reCAPTCHA integration.
- Admin Rights Management: Provided administrators with the ability to manage the platform effectively, controlling user access and monitoring content.
```sh
export const routes: Routes = [

  { path: '', component: ProductsPage },
  { path: 'newProduct', component: NewProductPage },
  { path: 'dashboard', component: DashboardPage },
  { path: 'ingredients', component: IngredientsPage },
  { path: 'newIngredient', component: NewIngredientPage },
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'edit-ingredient/:id', component: EditIngredientComponent },
  { path: 'editproduct/:id', component: EditProductsComponent},

  { path: '', redirectTo: 'inventory', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent }

];
   ```
- Error Handling: Implemented error handling mechanisms to provide meaningful error messages to users in case of failures.

<br>


### Highlights

One of the key highlights of the project was successfully implementing the inventory management system across multiple locations, being able to add, update and edit. The implementation of the crafting funtionality is also a big highlight, although it doesnt work with the inventory of the locations.

### Challenges

Integration of Products and Recipes with Different Locations: Integrating products and recipes with multiple locations posed a significant challenge. Managing inventory and recipes across different locations required careful consideration of data structures, database schema, and API endpoints.

## Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->
### Crafting Functionality with Different Locations:

One of the key areas for future improvement is enhancing the crafting functionality to work with different locations. This involves enabling users to create recipes using ingredients from specific locations and managing the crafting process efficiently. 

### Integration with Spirio for Product Sales:

Integrating the project with Spirio, a platform for selling products, presents an exciting opportunity for expanding the reach and commercialization of the application. By connecting Radian with Spirio, users can showcase their crafted products, manage inventory, process orders, and facilitate sales transactions seamlessly.

### Other:
- Enhanced Reporting and Analytics
- User Feedback and Collaboration Features
- Mobile Optimization and Accessibility

## Final Outcome

### Mockups

![Image Description](radian/assets/mockup.png)
![Image Description](radian/assets/mockup2.png)
![Image Description](radian/assets/mockup3.png)


### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)

<!-- ROADMAP -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->
## Authors

[contributors-shield]: https://badgen.net/github/contributors/LucaBreebaart/Radian
[contributors-url]: https://github.com/LucaBreebaart/Radian/graphs/contributors
[forks]:https://badgen.net/github/forks/LucaBreebaart/Radian
[forks-url]: https://github.com/LucaBreebaart/Radian/forks
[Stars]: https://badgen.net/github/stars/LucaBreebaart/Radian
[Stars-url]: https://github.com/LucaBreebaart/Radian/stargazers
[angular]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[Express.js]: https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[postgresql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
