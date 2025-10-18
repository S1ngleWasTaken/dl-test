module.exports = {
    apps: [{
        name: "dl-web", // Název procesu v PM2
        script: "./dist/server/entry.mjs", // Cesta k hlavnímu serverovému skriptu
        cwd: "/var/www/nosekjan.tech/dl-test/", // Důležité: pracovní adresář procesu
        exec_mode: "fork",
        instances: 1,
        // watch: true, // Pro produkci vypnuto
        env: {
            NODE_ENV: "production",
            PORT: 4321, // <--- TADY MUSÍ BÝT 4321, pokud na něm Astro naslouchá!
            OAUTH_GITHUB_CLIENT_ID: "Ov23liOAISF5qTeCX5a9", // <--- Vlož TVÉ Client ID
            OAUTH_GITHUB_CLIENT_SECRET: "ac7258cd0a5612bb087b7ccc666b0c832403c111" // <--- Vlož TVÉ Client Secret
        },
        error_file: "/var/log/pm2/dl-web-err.log",
        out_file: "/var/log/pm2/dl-web-out.log"
    }]
};
