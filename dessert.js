var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');
var escodegen = require('escodegen');
var argv = require('optimist').argv;

var ast = esprima.parse(fs.readFileSync(argv._[0]));
var blacklist = ['assert'];
if (argv.remove) {
    if (argv.remove.push) Array.prototype.push.apply(blacklist, argv.remove);
    else blacklist.push(argv.remove);
}
console.log(escodegen.generate(estraverse.replace(ast, {
    enter: function(node) {
        if (node.type === 'ExpressionStatement' &&
            node.expression.type === 'CallExpression' &&
            blacklist.indexOf(node.expression.callee.name) > -1) {
            return {type:'EmptyStatement'};
        }
    }
})));
