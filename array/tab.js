// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau

let tab1= [1,2,3,4,5];

function getTheLastItem(){
    
    let lastItem= tab1.pop();
    console.log(lastItem); 

}

getTheLastItem();  



// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
const tab2= [20,60,80,90,'i am the last one']; 


function returnTheLastItem(){
    let lastItem= tab2.pop();
    return lastItem; 
}

console.log(returnTheLastItem()); 


// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
const tab3=[8,5,10,80]; 

function getTheMin(){

    let minimum= Math.min(...tab3); 
    return minimum;  

}

console.log(getTheMin()); 


let tab4=[2,65,89,999]; 

function getTheMin2(tab){
    let minimum= tab[0];
    for (let i=0; i<tab.length; i++){

        if (tab[i]<minimum){
            minimum= tab[i]; 
        }   
            
    }
    return minimum; 
}

console.log(getTheMin2(tab4)); 




// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function getTheMax(tab){
    let max=tab[0]; 
    for (let i=0; i < tab.length; i++){
        if(tab[i] > max){
            max=tab[i]; 
        }
    }
    return max; 

}
console.log(getTheMax(tab4)); 


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

tabBig=[20,30,100,200]; 

function secondBiggest(tab) {
    let max1 = 0;
    let max2 = 0;
    for(let i = 0 ; i < tab.length ; i++) {
        if(tab[i] > max1) {
            max2 = max1;
            max1 = tab[i];
        } else if(tab[i] > max2) {
            max2 = tab[i];
        }
    }
    return max2; 
    
}

console.log(secondBiggest(tabBig)); 


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.


function returnNumber(tab,n){
    let compteur=0; 
    for(let i=0; i<tab.length; i++){

        if(tab[i]==n){
            compteur++; 
        }
    } 
    return compteur; 
}

console.log(returnNumber(tab4,2)); 


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function numberExist(tab,n){
    for(let i=0; i<tab.length; i++){
        if(n==tab[i]){
            return true; 

        }
    }
    return false; 

}

console.log(numberExist(tab4,999));


// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

tab5=[0,10,50,100,250,900]; 

function dichotomie(tab,n,i1,i2){

     

    if(i1>i2) {
        return false; 
    }


    let middle=(i1+i2)/2; 

    if(tab[middle]==n) {
        return true; 
    } else if (n>tab[middle]){
        return dichotomie(tab,n,middle+1, i2); 
    } else {
        return dichotomie(tab,n,i2,middle-1); 
    }
}

dichotomie(tab5,10000,0,500); 
 
// Créer un tableau qui contient [1,2,3,...,7777].

let tab=[]; 

for (let i=0; i<20; i++){
    tab.push(i); 
        
}

console.log(tab); 


// Créer un tableau qui contient [10,20,30,...,77770].

for (let i=10; i<77770; i+=10){
    tab.push(i); 
}

console.log(tab); 

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].




// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.


// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]*/