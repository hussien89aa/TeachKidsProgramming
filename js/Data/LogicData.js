var Questions=[ 
{ text:" Find  z= a AND b where a=True, b=False",
 Solution:"false"
},
{ text:" Find  z=a AND b OR C where a=False, b=Ture, C=True",
 Solution:"true"
},
{  text:" Find  z=a AND Not(b) OR C where a=False, b=Ture, C=True",
 Solution:"true"
},
{ text:" Find  z=(a between 1 and 100) where a=?",
 Solution:"true"
},
{ text:" Find  z=(a NOT between 1 and 100) where a=?",
 Solution:"true"
},

{ text:" Find  z=(a>b)||(a<c) where a=5, b=15,c=6",
 Solution:"(5>15)||(5<6)"
},
{ text:" Find  z=(a>=b)||(a<c) where a=5, b=15,c=6",
 Solution:"(5>=15)||(5<6)"
},
{ text:" Find  z= ( (a>b)||(a<c)) &&(c<d) where a=5, b=15,c=6,d=10",
 Solution:"((5>15)||(5<6))&&(6<10)"
},
];