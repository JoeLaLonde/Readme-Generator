function generateMarkDown(data) {
    return '
    # $(data.title)

    ## Table of Content
    -[Project description](#description)
    -[Usage](#usage)
    -[Contributing](#contributing)
    -[Insallation](#instalation)
    -[Questions](#questions)
    -[License](#license)

    ## Description
    ${data.description}

    ## Usage
    ${data.usage}

    ## Installation
    ${data.instalation}

    ## Contributing
    ${data.contributing}

    ## Questions
    Contact details
    Github: ${data.github}
    Email: ${data.email}

    ## License
    ${data.license}
    ';
}

module.exports = generateMarkDown;