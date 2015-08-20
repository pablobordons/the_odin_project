function largestPrimeFactor(N){
	var prime = 0;
	var r = N;
	var div = 2;

	while (r > 1){
		while (r % div == 0){
			prime = r;
			r = r / div;

		}

		div++;

	} 
	return prime;
};

debug(largestPrimeFactor(600851475143));