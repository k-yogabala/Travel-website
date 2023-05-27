import '../App.css';

function Payment(){
    return(
        <div>
            <center><h3 style={{border:"2px solid black"}}>PAYMENT METHODS</h3></center>
            <div className='App-body1'>
            <marquee>----PHONE PAY----</marquee>

      <div class='App-payment'>
                        

           {/* <center><h1>Payment Methods</h1></center> */}
           Payment Through Phonepe<br></br>
           <h3 style={{border:"2px solid black"}}>UPI Id: 8106773798@ybl  </h3>
               <a href="http://localhost:3000/poo">Pay Through QR</a> <br></br>
            </div>
            <marquee>----GOOGLE PAY----</marquee>
            <div class='App-payment'>
           {/* <center><h1>Payment Methods</h1></center> */}
           Payment Through GPAY<br></br>
           <h3 style={{border:"2px solid black"}}>UPI Id : 9989634265@ybl  </h3>
               <a href="http://localhost:3000/poo">Pay Through QR</a> <br></br>
            </div>
            <marquee>----Paytm----</marquee>
            <div class='App-payment'>
           

                        

           {/* <center><h1>Payment Methods</h1></center> */}
           Payment Through Paytm<br></br>
           <h3 style={{border:"2px solid black"}}>UPI Id : 9989634265@ybl  </h3>
               <a href="http://localhost:3000/poo">Pay Through QR</a> <br></br>           
            </div>
            </div>
            <center><a href="http://localhost:3000/hom">Next:</a></center>
            </div>
        
    );
    
}
export default Payment;