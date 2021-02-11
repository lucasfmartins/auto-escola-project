module.exports = {
  "stories": [

    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/*.stories.mdx",
    "../src/components/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/preset-create-react-app",
   
  ]
}

// {
//   name: "@storybook/addon-docs",
//   options: {
//     configureJSX: true,
//   },
// },

//SEGUE A HIERARQUIA DE PASTAS
// "../src/**/*.stories.mdx",
// "../src/**/*.stories.@(js|jsx|ts|tsx)"
