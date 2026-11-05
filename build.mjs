import {cp, rm, mkdir, writeFile, readFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true}); await cp('src','dist/src',{recursive:true});
await cp('index.html','dist/index.html');
const env={apiUrl:process.env.PUBLIC_API_URL||'',mapKey:process.env.PUBLIC_2GIS_KEY||''};
await writeFile('dist/src/build-config.js',`export default ${JSON.stringify(env)};\n`);
console.log('Static build ready in dist/.');
