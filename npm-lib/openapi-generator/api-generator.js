const path = require('path');
const {execSync} = require('child_process');
const dotenv = require('dotenv');

try {
    const result = dotenv.config({path: path.resolve(__dirname, '.env.local')});
    const openApiYaml = result.parsed.OEPN_API_YAML

    if (result.error || !openApiYaml) {
        console.log('.env.local 파일이 없습니다.');
        throw new Error()
    }

    const command = `npx openapi-typescript ${openApiYaml} --output ./src/generated/api.d.ts`;
    console.log(`실행 중: ${command}`);
    execSync(command, {stdio: 'inherit'});

} catch (error) {
    console.error('스크립트 실행 중 오류가 발생했습니다:', error);
    process.exit(1);
}