function rectangleInputNumber(rectangleValue){

    const recWLid = document.getElementById( rectangleValue );
    const recWLvalueString = recWLid.value;
    const recWLNumber = parseFloat(recWLvalueString);

    return recWLNumber;

}

function rectangleArea(){
    
    const w = rectangleInputNumber( 'rec-w-value' );

    const l = rectangleInputNumber( 'rec-l-value' );

    const area = w * l;

    recResultPrint( 'rec-result-output', area );
}

function recResultPrint( recId, area ){

    const recResultOutput = document.getElementById( recId );
    recResultOutput.innerText = area;

}