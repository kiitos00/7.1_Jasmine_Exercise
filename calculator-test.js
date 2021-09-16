
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 90000,
    years: 10,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('1008.25')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 99999,
    years: 9,
    rate: 9.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('1402.45');
});

/// etc
