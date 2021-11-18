// Calcular monto y cantidad cuotas mensuales de una compra con tarjeta de credito,
// a partir del total de la compra y la tasa de interes

// find interesRate in months

function calculateInteresRateInMonths(interes) {
    return Math.pow(1 + (interes / 100), 1 / 12) - 1;
}

// calculate plazo amount
function calculateplazoAmount(montoCredito, plazo, interesMensual) {
    const num = Math.pow(1 + interesMensual, plazo) * interesMensual * montoCredito;
    const den = Math.pow(1 + interesMensual, plazo) - 1;
    return num / den
}

function calculate() {
    const montoCredito = document.getElementById('input-monto').value;
    const interesRate = document.getElementById('input-interes').value;
    const plazo = document.getElementById('input-plazo').value;

    const interesMensual = calculateInteresRateInMonths(interesRate);

    const plazoAmount = calculateplazoAmount(montoCredito, plazo, interesMensual);

    const result = document.getElementById("ResultP");
    result.innerHTML = `La cuota mensual a pagar es: ${(plazoAmount).toFixed(2)} por ${plazo} meses`;

}