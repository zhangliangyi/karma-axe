(function(window) {
  axe.configure({
    locale: {
      lang: 'de',
      rules: {
        accesskeys: {
          help: 'Der Wert des accesskey-Attributes muss einzigartig sein.'
        }
        // ...
      },
      checks: {
        abstractrole: {
          fail: 'Abstrakte ARIA-Rollen dürfen nicht direkt verwendet werden.'
        },
        'aria-errormessage': {
          // Note: doT (https://github.com/olado/dot) templates are supported here.
          fail:
            'Der Wert der aria-errormessage {{~it.data:value}} `{{=value}}{{~}}` muss eine Technik verwenden, um die Message anzukündigen (z. B., aria-live, aria-describedby, role=alert, etc.).'
        }
        // ...
      }
    }
  });
})(window);
