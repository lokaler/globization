# Globization

The build system used by "Globization" is based on [react-starter](https://github.com/wbkd/react-starter).
See there for information on setting up your machine, using the development server and building the app.


## Deployment

- live: http://www.spiegel.de/staticgen/data_imports/lokaler/deploy/dist/ 
- testing: http://www.spiegel.de/staticgen/data_imports/lokaler/testing/dist/

Every minute a machine at SPON checks if there are new commits to the 'deploy' and 'testing' branch. If so, the branch gets pulled (and deployed afterwards) automatically.

_(If the interval should change or a different branch should be deployed, please speak to Georg.)_ 

To deploy for run ``npm run deploy`` (for testing) or ``npm run deployLive`` (for live).

## Development

The React-App consists of 2 main components: the [visualization](https://github.com/lokaler/globization/tree/master/src/components/Vis) on the left and the [questionaire](https://github.com/lokaler/globization/tree/master/src/components/Questionnaire) on the right.

### questionaire
json js parser...

### visualization
d3.js

globe, map, scatterplot view
legend, tooltip view

## Create a new round

New rounds can be created using json, csv and js syntax in the [data](https://github.com/lokaler/globization/tree/master/src/data/questionnaires) folder.

*Structure of a round folder:*
````
*name of round*/
  cards/
    *.json          json of each card in questionaire
    index.js        combines all the cards
  datasets/
    *.csv           csv of each dataset, header: iso,value
    index.js        metadata of the *.csv
````
