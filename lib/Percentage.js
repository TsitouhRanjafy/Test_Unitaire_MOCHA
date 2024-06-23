const Percentage = {
    evolution : function(a,b,r){
        let difference = b - a;
        if (a == 0){
            return Infinity
        }
        return this.round( ((difference * 100)/a) , r );
    },
    round : function(a,r){
        let round = 1;
        for (let i = 1;i<=Math.round(r);i++){
            round *= 10;
        }
        return (Math.round(a*round) / round);
    }
}

export default Percentage