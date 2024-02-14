function getValue( elementId ){

    const valueId = document.getElementById( elementId );
    const valueString = valueId.value;
    const inputNumber = parseFloat( valueString );

    return inputNumber;
}

function triangleAreaFunction(){

    const b = getValue( 'first-value' );

    const h = getValue( 'second-value' );

    const area = 0.5 * (b * h);

    output( 'result-output', area );
}

function output( element, area ){
    const resultPrint = document.getElementById( element );
    resultPrint.innerText = area;
}