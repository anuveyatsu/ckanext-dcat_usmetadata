# ckanext-dcat_usmetadata

This extension provides a react Admin UI for managing custom fields related to [DCAT-US Schema](https://https://resources.data.gov/resources/dcat-us/).

## Installation

To install this package, activate CKAN virtualenv (e.g. "source /path/to/virtenv/bin/activate"), then run

`(virtualenv) pip install -e git+https://github.com/GSA/ckanext-dcat_usmetadata@master#egg=ckanext-dcat_usmetadata`
`(virtualenv) python setup.py develop`

In your CKAN .ini file add `dcat_usmetadata` to your enabled plugins:

`ckan.plugins = [YOUR PLUGINS HERE...] dcat_usmetadata`

## Testing

Run `make test` to run the tests locally inside a docker container

**NOTE** That you need to have docker and docker-compose installed locally for the tests to run.

## Metadata App

The Metadata APP is a [Create React App](https://create-react-app.dev/)-bootstrapped project.

To run the app use `make app-up`
