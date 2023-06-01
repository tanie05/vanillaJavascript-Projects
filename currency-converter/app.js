const curr1 = document.getElementById('currency1')
const curr2 = document.getElementById('currency2')
const input_curr = document.querySelector('.input_curr')
const output_curr = document.querySelector('.output_curr')
const btn = document.getElementById("btn")

const url = 'https://api.frankfurter.app/currencies'

fetch(url)
    .then((data) => data.json())
    .then((data) => {
        const entries = Object.entries(data)
        console.log(entries)

        for( let i=0;i<entries.length;i++){
            const curr = entries[i][0]
            const val = `${curr} (${entries[i][1]})`
            
            const opt1 = document.createElement('option')
            opt1.value = curr;
            opt1.innerHTML = val;

            const opt2 = document.createElement('option')
            opt2.value = curr;
            opt2.innerHTML = val;
            
            curr1.appendChild(opt1)
            curr2.appendChild(opt2)
        
        }
        
})


function convert(){
    
    if(curr1.value !== curr2.value){
        
        const url = `https://api.frankfurter.app/latest?amount=${input_curr.value}&from=${curr1.value}&to=${curr2.value}`
        fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            // console.log(data.rates[curr2.value])
            // alert(`${input_curr.value} ${curr1.value} = ${data.rates[curr2.value]} ${curr2.value} `)
            output_curr.value = data.rates[curr2.value]
        })
        
    }
    else{
        alert("please select two different currencies")
    }
}

