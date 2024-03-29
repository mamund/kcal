# KCAL Project

## Starting Plan

### Services Summary

Design one or more hypermedia services that support the following:

* computing calories expended by a person for an activity (computation)
* computing maintenance calories for a person (computation)
* computing calorie deficit for a person (consumed - expended = deficit)
* tracking weight for a person (data collection)
* tracking calorie expenditure for a person (small database + computation)
* tracking calorie intake for a person (database problem)

### Other Constraints

* Use Windows Azure CLI tools
* Use only OSS components
* Use Vim as editing environment
* Use only �Cloud-based� services (code hosting, db hosting, source control, etc.)
* Use only hypermedia messages (state representation using collection+json, html, etc.)
* Use node.js as the server language
* Use HTML/JS/CSS as client

## Pre-game

Before showing up for the session, handle the following

* list out target services, ideas for session
* research topic, locate sample sites, APIs, routines, etc.
* make sure machine is ready-to-rock (azure-cli, node, git, vim)


## Actual Run-through

1. fire up console, start cmd, git, and vim windows
1. log into github and create an empty repo (kcal) w/ README
1. pull repo onto local machine
1. update README w/ main bullets
1. start server.js for root services
1. write response scaffolding (could skipl if using express or some other lib)
1. create package.json file
1. start module file for expending calories
1. get expend module working in test mode (static data)
1. get expend module working in dynamic mode (passed args)
1. create azure site for hosting
1. push to azure and check results

