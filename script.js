
function process(){
    let letter=document.getElementById("word").value;
    console.log(letter);

   //async function for api

    async function process(){
    let data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${letter}`);
    let result=await data.json();
   let origin=(result[0].origin);
  let definition=JSON.stringify(result[0].meanings[0].definitions[0]);

  //Dom to display in html
  
document.getElementById("print").innerHTML=`<p>Origin of the word :${origin}</p>
<p> Definition of the word ${definition}</p>`

}
    process();
}