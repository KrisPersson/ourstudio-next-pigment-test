/** @type {import('next').NextConfig} */
import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
const nextConfig = {};

const extendedTheme = {
    theme: extendTheme({
        colors: {
            primaryDark: "rgba(0, 0, 0, 1)",
            primaryDefault: "rgba(24, 24, 24, 1)",
            primaryLight: "rgba(255, 255, 255, 1)",
            secondaryDefault: "rgba(254, 238, 190, 1)"
        },
        spacing: {
            baseUnit: 8,
            gutter: {
                container: {
                    inline: {
                        mobile: "32px",
                        desktop: "40px"
                    },
                    block: {
                        mobile: "28px",
                        desktop: "40px"
                    }
                }
            }
        },
        typography: {
            fontFamily: 'DM Sans, sans-serif'
        }
    })
}

export default withPigment(nextConfig, extendedTheme);
