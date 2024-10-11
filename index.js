'use strict'

function showMap() {
    let html = '<table border="1">';
    for(let i = 7; i >= 0; i--) {
        html += '<tr>';
        for(let j = 0; j <= 7; j++) {
            html += '<td></td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.querySelector('#board').innerHTML = html;
}

showMap();
