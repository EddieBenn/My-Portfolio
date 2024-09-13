interface Secrets {
    apiHost: string;
}

interface Config {
    secrets: Secrets;
}

let cache: Config | null = null;

const environment = import.meta.env.VITE_APP_ENVIRONMENT || "development";

const config = (): Config => {
    if (!cache) {
        cache = Object.freeze({
            secrets: {
                apiHost:
                    environment === "development"
                        ? "https://portfolio-eight-beta-28.vercel.app/"
                        : "https://portfolio-eight-beta-28.vercel.app/"
            },
        });
    }
    return cache;
};

export default config;


//https://localhost:5000/