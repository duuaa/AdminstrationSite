# README File For AdminstartionSite
## to get Login in the Adminstration site you should use
 # Username: Admin
 # Password: 1234

# StudentProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Specifications Achieved 
* Simple login screen with fake token stored locally
* Home screen which consists of a page of students records with columns {first_name,
last_name}
* User can navigate to other pages
* On click, user shall be navigated to a new screen which displays all students details given from
the api
* User can specify the number of students to view per page
* Logout
* Unit tests for the services using Karma

## Bonus Achieved 
* Responsiveness
* state management {NgRx}

## Components
* LoginComponent
* HeaderComponent
* StudentsListComponent with childern (StudentProfileComponent,AllDetailsComponent) with student-medule and student-routing-module 

## Services
* AuthService
* StudentService
* SingleStudentService

## Guards
* Authguards with (CanLoad,CanActivate)

## Store *NGRX
* Actions
* Effects
* Reducers

## Animations
* Animations


## Technology Used
* HTML
* CSS
* TYPESCRIPT
* Bootsrap css
* NgbModule "ng Bootsrap"
* HttpClient
* NGRX state management
* Lazy louding
* Karma unit testiog
* Animation
* TestBed
* Guards with CanLoad,CanActivate
* JWT decryption 
* Bahvior Subject
* RXJS
* Advenced Routing
* connecting with the API
* Fetch the data from API
* NPM
* SCSS

## Testing Report 
 * 9 specs, 0 failures, randomized with seed 24603
 * StudentsService
  *when setStudentperPageNumber() called must affect pagenumber
  when setPageNumber() called must affect pagenumber
  when setId() called must affect pagenumber
* AppComponent
  *should create the app
  *should have as title 'studentProject
* AuthService
  *must return false if the user does not has access to login
  *must return true if the user is the admin
  *should be called logout function
* SingleStudentService
  *should be called getById function


## Coverage Percent
* Coverage summary
* Statements   : 51.82% ( 57/110 )
* Branches     : 23.08% ( 6/26 )
* Functions    : 40% ( 12/30 )
* Lines        : 49.02% ( 50/102 )

