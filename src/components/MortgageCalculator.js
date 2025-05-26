import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(7.5);

  const calculateMonthlyPayment = () => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      return principal / numPayments;
    }
    
    return principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  const monthlyPayment = calculateMonthlyPayment().toFixed(2);
  const totalPayment = (monthlyPayment * loanTerm * 12).toFixed(2);
  const totalInterest = (totalPayment - (propertyPrice - downPayment)).toFixed(2);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Calculadora de Hipoteca</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Precio de la propiedad: ${propertyPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="50000"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Enganche: ${downPayment.toLocaleString()}
          </label>
          <input
            type="range"
            min="0"
            max={propertyPrice}
            step="10000"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Plazo del préstamo: {loanTerm} años
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Tasa de interés: {interestRate}%
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Pago mensual:</span>
          <span className="font-bold">${monthlyPayment}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Total a pagar:</span>
          <span className="font-bold">${totalPayment}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Interés total:</span>
          <span className="font-bold">${totalInterest}</span>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;