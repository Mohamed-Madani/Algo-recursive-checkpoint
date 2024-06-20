// Power Function
function power(base, exponent) {
    // Base case: exponent is 0
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: exponent is positive
    else if (exponent > 0) {
        return base * power(base, exponent - 1);
    }
    // Handle negative exponent
    else {
        return 1 / power(base, -exponent);
    }
}

// Fibonacci Sequence
function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}