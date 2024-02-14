function rhombusArea(){
    const d1 = commoninput('rhombus-d1-value');
    const d2 = commoninput('rhombus-d2-value');

    area = 0.5 * d1 * d2;

    commonoutputPrint( 'rhombus-result-output', area );
}