module.exports = grammar({
  name: 'bug_demo',

  rules: {
    data: $ => $._quoted_value,
    _quoted_value: $ => seq('"', $.value, '"'),
    value: $ => choice(/a[^"]*/, ''),
  }
});
