/* করিম সাহেব ব্রাক ব্যাংক থেকে   ৬ মাসে মেয়াদে ১৫ শতাংশ হারে মুনাফায় ৫ লক্ষ টাকা লোন নিবে,কিন্তু তার মাসিক ইনকাম ২০ হাজার টাকা এবং তার মাসিক খরচ ১০ হাজার টাকা হলে খরচ বাদে প্রতি মাসে তার কত টাকা আসে এবং সে কি উক্ত কিস্তির টাকা পরিশোধ করতে পারবে? */

const loanCalculation = () => {
    const loanAmount = 500000;
    const monthlyInterest = (loanAmount*15)/100;
    const salary = 20000;
    const expense = 10000;
    const monthlyInstallmentAbility = salary - expense;
    const loanPaybleMonth = 6;
    const maxInstallMentInPeriod = monthlyInstallmentAbility*loanPaybleMonth;
    const totalInstallmentReq = (loanAmount+monthlyInterest)*loanPaybleMonth;
    
    return totalInstallmentReq > maxInstallMentInPeriod ? 
    "Mr. Karim won't be able to pay installment wihitn time period" :
    "Mr. Karim able to pay installment wihitn time period";

}

console.log(loanCalculation());
