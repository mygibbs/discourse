/**
  Support for github style code blocks, here you begin with three backticks and supply a language,
  The language is made into a class on the resulting `<code>` element.

  @event register
  @namespace Discourse.Dialect
**/
Discourse.Dialect.replaceBlock({
  start: /^`{3}([^\n\[\]]+)?\n?([\s\S]*)?/gm,
  stop: '```',
  emitter: function(blockContents, matches) {
    return ['p', ['pre', ['code', {'class': matches[1] || 'lang-auto'}, blockContents.join("\n") ]]];
  }
});

// Ensure that content in a code block is fully escaped. This way it's not white listed
// and we can use HTML and Javascript examples.
Discourse.Dialect.postProcessTag('code', function (contents) {
  return Handlebars.Utils.escapeExpression(contents);
});

Discourse.Markdown.whiteListClass(
  "lang-auto", "1c", "actionscript", "apache", "applescript", "avrasm", "axapta", "bash", "brainfuck",
  "clojure", "cmake", "coffeescript", "cpp", "cs", "css", "d", "delphi", "diff", "xml", "django", "dos",
  "erlang-repl", "erlang", "glsl", "go", "handlebars", "haskell", "http", "ini", "java", "javascript",
  "json", "lisp", "lua", "markdown", "matlab", "mel", "nginx", "objectivec", "parser3", "perl", "php",
  "profile", "python", "r", "rib", "rsl", "ruby", "rust", "scala", "smalltalk", "sql", "tex", "text",
  "vala", "vbscript", "vhdl"
);
