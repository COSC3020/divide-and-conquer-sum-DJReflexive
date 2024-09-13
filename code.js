function divideAndConquerSum(a) {
    let len = a.length;
    
    if (len == 0) { return 0; }
    if (len == 1) { return a[0]; }

    // keep in mind that .slice second parameter is noninclusive
    let firstThird = a.slice(0, len/3);
    let secondThird = a.slice(len/3, 2*(len/3));
    let thirdThird = a.slice(2*(len/3), len+1); // +1 to get the rest of the a

    return divideAndConquerSum(firstThird) + 
           divideAndConquerSum(secondThird) + divideAndConquerSum(thirdThird);
}
