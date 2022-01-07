function run(){
    let a = parseInt(document.getElementById("x").value);
    if(a<0){
        document.getElementById("result").innerText="Không thể nhập giá trị âm";
    }
    else if(a<50){
        b = a * 1678;
        document.getElementById("result").innerText="Tiền điện phải trả là: " + b + "đồng";
    }
    else if(a<100){
        b = (50 * 1678) + ((a-50) * 1734)
        document.getElementById("result").innerText="Tiền điện phải trả là: " + b + "đồng" ;
    }
    else if(a<200){
        b = (50 * 1678) + (50 * 1734) + ((a-100)*2014)
        document.getElementById("result").innerText="Tiền điện phải trả là: " + b + "đồng" ;
    }
    else if(a<300){
        b = (50 * 1678) + (50 * 1734) + (100*2014) + ((a-200)*2536)
        document.getElementById("result").innerText="Tiền điện phải trả là: " + b + "đồng" ;
    }
    else if(a<400){
        b = (50 * 1678) + (50 * 1734) + (100*2014) + (100*2536) + ((a-300)*2834)
        document.getElementById("result").innerText="Tiền điện phải trả là: " + b + "đồng" ;
    }
    else {
        b = (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (100 * 2834) + ((a-400)*2927)
        document.getElementById("result").innerText = "Tiền điện phải trả là: " + b + "đồng" ;
    }
}