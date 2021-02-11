module.exports = {
  "stories": [

    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/*.stories.mdx",
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
    "../src/styles/*.stories.mdx",
    "../src/styles/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/preset-create-react-app",
   
  ]
}


//SEGUE A HIERARQUIA DE PASTAS
// "../src/**/*.stories.mdx",
// "../src/**/*.stories.@(js|jsx|ts|tsx)"
