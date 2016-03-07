# Globization

The build system used by "Globization" is based on [react-slingshot](https://github.com/coryhouse/react-slingshot).
See there for information on setting up your machine, using the development server and building the app.

Differences to [react-slingshot](https://github.com/coryhouse/react-slingshot) are:

* The code style used (and enforced via .eslintrc) is the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Deployment

Every ten minutes a machine at SPON checks if there a new commits to the 'deploy' branch. If so, the branch gets pulled (and deployed afterwards) automatically.

_(If the interval should change or a different branch should be deployed, please speak to Georg.)_ 
