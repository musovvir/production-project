import * as webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    // const svgLoader = {
    //     test: /\.svg$/,
    //     // issuer: /\.[jt]sx?$/,
    //     use: [
    //         {
    //             loader: '@svgr/webpack',
    //             options: {
    //                 svgConfig: {
    //                     plugins: [
    //                         'preset-default',
    //                         {
    //                             name: 'convertColors',
    //                             params: {
    //                                 currentColor: true,
    //                             },
    //                         },
    //                         {
    //                             name: 'addClassesToSVGElement',
    //                             params: {
    //                                 className: 'app-icon',
    //                             },
    //                         },
    //                     ],
    //                 },
    //             },
    //         }],
    // };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
