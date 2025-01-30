import request from 'supertest';
import dotenv from 'dotenv';

/**
 * I kept receiving this error => TypeError: Cannot read properties of undefined (reading 'address')
 * when running the test:api script outside the api folder. It turns out, supertest cannot resolve
 * relative path '../../../.env' correctly. Changing to the absolute path resolved the issue.
 */
const absolutePath = process.cwd();
dotenv.config({ path: `${absolutePath}/.env` });

const agent = request.agent(process.env.API_BASE_URL).query({
    key: process.env.API_KEY,
    token: process.env.TOKEN,
});

export default agent;

/**
 * https://github.com/ladjs/supertest
 * https://github.com/ladjs/superagent
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
 * 
 * For-in loop iterates over both own and inherited enumerables, so,
 * there is a good chance to find all available methods and then google them.
 */
// for (let prop in request.agent(process.env.API_BASE_URL)) {
//      console.log(prop);
// }