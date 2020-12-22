module.exports = {
    components: 'src/components/*/index.js',
    styleguideDir: 'dist',
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto',
                },
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
            base: '"Roboto", sans-serif',
        },
    },
};
