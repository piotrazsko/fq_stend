const path = require('path')
module.exports = {
    components: ['src/components/*/index.js', 'src/components/redesign/*/index.js'],
    styleguideDir: 'dist',
    template: {
        head: {
            links: [
              
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat',
                },
                {
                    rel: 'stylesheet',
                    href: 'http://localhost:6060/src/static/fonts/stylesheet.css',
                },
            ],
        },
    },
    theme: {
        fontFamily: {
            base: 'Montserrat, sans-serif',
        },
    },
    styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/HOK')
  }
};
