export const buildSvgLoader = () => ({
    test: /\.svg$/,
    // issuer: /\.[jt]sx?$/,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                svgConfig: {
                    plugins: [
                        'preset-default',
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                        {
                            name: 'addClassesToSVGElement',
                            params: {
                                className: 'app-icon',
                            },
                        },
                    ],
                },
            },
        }],
});
