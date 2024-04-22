Ionic Firebase Integration
Make sure you have already Ionic CLI and ng CLI
If note please use the below commands
npm install -g @ionic/cli
npm install -g @angular/cli
Create new project with Ionicstart
Setup the new Firebase Project
https://console.firebase.google.com/
Create document and collection
ionic start devdacticFire blank --type=angular --capacitor
cd ./devdacticFire

# Generate a page and service
ionic g page modal
ionic g service services/data

# Install Firebase and AngularFire
ng add @angular/fire
