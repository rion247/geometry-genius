function pentagonArea(){
    
    const p = commoninput('pentagon-p-value');

    const b = commoninput('pentagon-b-value');

    area = 0.5 * p * b;

    commonoutputPrint( 'pentagon-result-output', area );
}