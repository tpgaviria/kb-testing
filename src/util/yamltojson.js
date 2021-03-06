const yaml = require('js-yaml');
const fs = require('fs');

try {
    const config = yaml.safeLoad(fs.readFileSync('../doc-order/doc-order.yaml', 'utf8'));
    const indentedJson = JSON.stringify(config, null, 4);
    console.log(indentedJson);
    fs.writeFile('doc-order.json', indentedJson, (err) => {
        if (err) throw err;
    })
} catch (e) {
    console.log(e);
}