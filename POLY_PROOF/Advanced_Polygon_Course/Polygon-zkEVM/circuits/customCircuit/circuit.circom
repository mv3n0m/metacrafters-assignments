pragma circom 2.0.0;


template CustomCircuit () {

    // Input signals
    signal input a;
    signal input b;

    // Intermediary signals
    signal x;
    signal y;

    // Output signal
    signal output q;

    // Component Gates
    component andGate = AND();
    component notGate = NOT();
    component orGate = OR();


    // Circuit Logic //

    andGate.a <== a;
    andGate.b <== b;
    x <== andGate.out;

    notGate.in <== b;
    y <== notGate.out;

    orGate.a <== x;
    orGate.b <== y;
    q <== orGate.out;
}

template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}

template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a*b;
}


component main = CustomCircuit();