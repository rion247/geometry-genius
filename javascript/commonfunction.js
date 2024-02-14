function commoninput(elementId){

    const inputElementId = document.getElementById( elementId );
    const inputElementIdValue = inputElementId.value;
    const inputElementNumber = parseFloat( inputElementIdValue );

    return inputElementNumber;

}

function commonoutputPrint( outputId, area ){
    const output = document.getElementById( outputId );
    output.innerText = area;
}