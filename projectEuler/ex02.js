function sumFibonacciUntil(N){

	var n1 = 1;
	var n2 = 2;
	var ntemp = 0;
	var sum = 0;
	
	while (n1<N){

		sum+=n1;
		// debug(n1);
		ntemp = n1+n2;
		n1 = n2
		n2 = ntemp
		
	}
	return sum;
}

debug(sumFibonacciUntil(4000000));


