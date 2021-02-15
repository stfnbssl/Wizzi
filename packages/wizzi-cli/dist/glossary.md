# Glossary
## wizzi-cli
The wizzi factory command line interface.
## Command 'create'
The CLI command for creating the package of a Wizzi production from an available starter. Executes a meta production.
## Production starter
A meta production for generating a type of Wizzi production ('webpack', 'gatsby', 'express', ...).
### Meta production
A Wizzi production that processes meta ittf documents into artifact ittf documents (.js.ittf, .html.ittf, .css.ittf, json.ittf, ...).
### Meta ittf document
A templated ittf document of schema 'ittf' (extension 'ittf.ittf') that is processed in a meta production for generating the ittf document of an artifact production.
### Artifact ittf document
An ittf document that in a Wizzi production generates a software artifact (.js, .html, .css, json, ...).
### Artifact production
The common Wizzi production, a generation of a set of software artifacts processing a set of ittf documents.
### object answersCtx
The context object created by the CLI interactive 'inquirer'. Is preprocessed for creating the cliCtx object.
### object cliCtx
The context object of a wizzi-cli meta production.
### object wzCtx
The standard main context object of an artifact production (Wizzi production).
