const plugin = {
	meta: {
		name: "eslint-plugin-no-bad-string",
		version: "1.0.0",
		namespace: "no-bad-string",
	},
	configs: {},
	rules: {
    "no-bad-string": {
      create(context) {
        return {
          Literal: function (node) {
            if (node.value && typeof node.value === "string") {
              if (node.value.includes("bad")) {
                context.report({
                  node,
                  message: "Avoid using the string 'bad'.",
                });
              }
            }
          },
        };
      },
    },
  },
};

export default plugin;
