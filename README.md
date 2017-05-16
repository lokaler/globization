# Globization

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
See there for information on setting up your machine, using the development server and building the app.


## Deployment


## Development

The Create React App consists of 2 main components: the [visualization](https://github.com/lokaler/globization/tree/master/src/components/Vis) on the left and the [questionaire](https://github.com/lokaler/globization/tree/master/src/components/Questionnaire) on the right.

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
