module.exports = function (plop) {
    plop.setGenerator('element', {
        description: 'Create a Element component structure',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Element name:',
            },
            {
                type: 'input',
                name: 'dest',
                message: 'Destination directory? (leave empty for current directory)',
                default: process.cwd(),
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{dest}}/{{kebabCase name}}.tsx',
                templateFile: 'templates/element/component.tsx.hbs',
            },
        ],
    });

    plop.setGenerator('provider', {
        description: 'Create a Provider component structure',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Provider name:',
            },
            {
                type: 'input',
                name: 'dest',
                message: 'Destination directory? (leave empty for current directory)',
                default: process.cwd(),
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{dest}}/{{kebabCase name}}-provider.tsx',
                templateFile: 'templates/provider/component.tsx.hbs',
            },
        ],
    });
};
