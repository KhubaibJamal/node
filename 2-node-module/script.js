const colors = require('colors');
const chalk = require('chalk');

console.log(colors.green('hello'));
console.log(colors.red.underline('i like cake and pies'))
console.log(colors.inverse('inverse the color'));
console.log(colors.rainbow('OMG Rainbows!'));
console.log(colors.trap('Run the trap'));



const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));