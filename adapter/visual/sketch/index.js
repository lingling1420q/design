const {Sketch, Page, Artboard} = require('sketch-constructor');
const fs = require('fs');

function buildSketch(designInfo) {
    const newSketch = new Sketch();
    const page = new Page({
        name: 'HomePage'
    });
    var index = 1;
    for (const key in designInfo.components) {
        const artboard = new Artboard({
            name: key,
            frame: {
                width: '320px',
                height: '480px',
                x: 360 * index + 'px'
            },
        });

        page.addArtboard(artboard);
        index++;
    }
    newSketch.addPage(page);
    // const page = new Page({});
    // const artboard = new Artboard({});
    // page.addArtboard(artboard);
    //
    // newSketch.addPage(page);

    newSketch.build('output.sketch');
}


function readJsonFile(path) {
    let rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
}

designInfo = readJsonFile('output.json');
buildSketch(designInfo);