const hostName = window.location.hostname;
const isDev = hostName === 'anvaka.github.io';
const server = isDev ? `http://${hostName}:8081/` : 'https://anvaka.github.io/map-of-github-data/';
const version = 'v1';

export default {

}