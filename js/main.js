boton1.addEventListener("click", function (event){
    event.preventDefault();
 
    let input1 = document.getElementById("input1").value.toString().split(' ');

    let max1 = parseFloat(input1[0]);


    for (let i = 0; i < input1.length; i++) {
        if (parseFloat(input1[i]) > max1) {
            max1 = parseFloat(input1[i])
        }
        
    }
    let resultado = document.getElementById("alerta1");
    resultado.innerHTML = "El número mayor del arreglo es: " + "<strong>" + max1 + "</strong>";

})
///////////////////////////////////////////////////////////////////////
boton2.addEventListener("click", function (event){
    event.preventDefault();
 
    let input2 = document.getElementById("input2").value.toString().split(' ');

    let menor1 = parseFloat(input2[0]);


    for (let i = 0; i < input2.length; i++) {
        if (parseFloat(input2[i]) < menor1) {
            menor1 = parseFloat(input2[i])
        }
        
    }
    let resultado = document.getElementById("alerta2");
    resultado.innerHTML = "El número mayor del arreglo es: " + "<strong>" + menor1 + "</strong>";

})

///////////////////////////////////////////////////////////////////

boton3.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada = document.getElementById("input3").value.toString().split(' ');

    let solos = new Set(entrada);
    solos = Array.from(solos)
  
    let veces_repetidos = []
   
    for (let i = 0;  i < solos.length; i++) {
        repetido = 0;
        for (let j = 0;  j < entrada.length; j++) {
            if (parseFloat(solos[i]) == parseFloat(entrada[j])) {
              
                repetido ++
            }
        } 
        veces_repetidos.push(repetido);
    }
    console.log(solos);
    console.log(veces_repetidos);
  
    let resultado = document.getElementById("alerta3");
    resultado.innerHTML = ""
    if (solos.length == entrada.length) {
        resultado.innerHTML += "No se repiten números";
    } else {
        for (let index = 0; index < veces_repetidos.length; index++) {
            if (veces_repetidos[index] > 1 ) {
                resultado.innerHTML += "El número: " + solos[index] + " se repite " + "<strong>" + veces_repetidos[index] + "</strong>" + " veces" + "<br/>";
            }
        }
    }

    document.getElementById("input3").focus();
    document.getElementById("input3").select();
    
});

boton4.addEventListener("click", function (event){
    event.preventDefault();

    let arreglo2 = document.getElementById("input4").value.toString().split(' ');


        let  indices = [], desorden = [], n = arreglo2.length, intentos = 0

        do {
            while (indices.length < arreglo2.length) {
            
                n  = parseInt(Math.floor(Math.random() * arreglo2.length));
            
                if (indices.includes(n) || isNaN(n)) {
                    
                } else {
                    indices.push(n);
                    
                    
                }
                             
            }
            
            for (let i = 0; i < indices.length; i++) {
                desorden[indices[i]] = arreglo2[i];
                
            }
            intentos ++
        } while ((desorden == arreglo2 || intentos < 5) );

        console.log(arreglo2);
        console.log(desorden);

        let resultado = document.getElementById("alerta4");
        resultado.innerHTML = ""
       
        for (let i = 0; i < desorden.length; i++) {
            resultado.innerHTML += desorden[i] + " ";
            
        }
    
        document.getElementById("input4").focus();
        document.getElementById("input4").select();

        });


  /////////////////////////Ejercicios parte 2////////////////////
 
boton5.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada2 = document.getElementById("input5").value.toString().split(' ');
    
    function array_max(arr) {
        let max_num = arr[0]
        arr.forEach(element => {
            if (parseFloat(element) > max_num) {
                max_num = parseFloat(element)
            }
        });
        return max_num
    }


    function array_min(arr) {
        let min_num = arr[0]
        arr.forEach(element => {
            if (parseFloat(element) < min_num) {
                min_num = parseFloat(element)
            }
        });
        return min_num
    }


    function enrango(arr, min1, max1){
        if ((array_min(arr) >= min1 && array_max(arr) <= max1)) {
            return true
        }
        return false
    }

   if ((enrango(entrada2, 1, 100) && entrada2.length == 3)) {

    max_num = "El número mayor es: " + array_max(entrada2);
   } else {
    max_num = "el arreglo no está en rango o no tiene 3 elementos"
   }


    let resultado = document.getElementById("alerta5");
    resultado.innerHTML = "";
    resultado.innerHTML = max_num;

    document.getElementById("input5").focus();
    document.getElementById("input5").select();

});


boton6.addEventListener("click", function (event){
    event.preventDefault();

    //definir entrada
    let entrada3 = document.getElementById("input6").value.toString().split(' ');
    
    function array_max(arr) {
        let max_num = arr[0]
        arr.forEach(element => {
            if (parseFloat(element) > max_num) {
                max_num = parseFloat(element)
            }
        });
        return max_num
    }


    function array_min(arr) {
        let min_num = arr[0]
        arr.forEach(element => {
            if (parseFloat(element) < min_num) {
                min_num = parseFloat(element)
            }
        });
        return min_num
    }


    function enrango(arr, min1, max1){
        if ((array_min(arr) >= min1 && array_max(arr) <= max1)) {
            return true
        }
        return false
    }

   if ((enrango(entrada3, 1, 100) && entrada3.length == 3)) {

    min_num = "El número menor es: " + array_min(entrada3);
   } else {
    min_num = "el arreglo no está en rango o no tiene 3 elementos"
   }


    let resultado = document.getElementById("alerta6");
    resultado.innerHTML = "";
    resultado.innerHTML = min_num;

    document.getElementById("input6").focus();
    document.getElementById("input6").select();

}); 
