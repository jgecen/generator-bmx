'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the best ${chalk.red('generator-bmx')} generator!`)
    )

    const prompts = [
      {
        type: 'input',
        name: 'entityName',
        message: 'Qual o nome da entidade?',
        default: 'Entidade'
      }
    ]

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    var options = { entityName: this.props.entityName }

    this.fs.copyTpl(
      this.templatePath('Controller.tpl'),
      this.destinationPath(
        `generators/app/draft/${this.props.entityName}Controller.java`
      ),
      options
    )
    this.fs.copyTpl(
      this.templatePath('Data.tpl'),
      this.destinationPath(
        `generators/app/draft/${this.props.entityName}Data.java`
      ),
      options
    )
    this.fs.copyTpl(
      this.templatePath('Repository.tpl'),
      this.destinationPath(
        `generators/app/draft/${this.props.entityName}Repository.java`
      ),
      options
    )
    this.fs.copyTpl(
      this.templatePath('Request.tpl'),
      this.destinationPath(
        `generators/app/draft/${this.props.entityName}Request.java`
      ),
      options
    )
    this.fs.copyTpl(
      this.templatePath('Response.tpl'),
      this.destinationPath(
        `generators/app/draft/${this.props.entityName}Response.java`
      ),
      options
    )
    this.fs.copyTpl(
      this.templatePath('Service.tpl'),
      this.destinationPath(
        `generators/app/draft/${this.props.entityName}Service.java`
      ),
      options
    )
  }

  /*
  install() {
    this.installDependencies()
  }
  */
}
