
let fichero = 'd1.txt'

fetch(fichero).then(respuesta => respuesta.text()).then(tabla)		

function tabla(entrada){
	let caso=entrada.split("\r\n")
	console.log(caso)
	
	let dimensiones=caso[0].split(" ");
	
	for(let i=0;i<dimensiones.length;i++){
		dimensiones[i]=+dimensiones[i]
	}
	
	let bidimensional=[];
	for(let i=0;i<dimensiones[0];i++){
		let fila=[];
		for(let j=0;j<dimensiones[1];j++){
			fila[j]=0;
		}
		bidimensional.push(fila);
	}

	console.log(bidimensional)
	
	if(dimensiones[2]!=caso.length-1){
		console.log("EL NUMERO DE MODIFICACIONES NO COINCIDE CON EL NUMERO DE LINEAS DE MODIFICACION");
	}else{
		let temporal=[];
		let indicecol;
		let firstmod;
		let secondmod;
		let mod;
		let x;
		for(let i=0;i<dimensiones[2];i++){
			temporal=caso[i+1].split(" ");
			for(let j=0;j<temporal.length;j++){
				temporal[j]=+temporal[j];
			}
			console.log(temporal)
			indicecol=temporal[0];
			firstmod=temporal[1];
			secondmod=temporal[2];
			mod=temporal[3];
			if(firstmod>secondmod){
				x=firstmod
				firstmod=secondmod
				secondmod=x
			}
			if(firstmod==secondmod){
					bidimensional[firstmod][indicecol]=bidimensional[firstmod][indicecol]+mod;
			}else{
				for(let k=firstmod;k<=secondmod;k++){
					bidimensional[k][indicecol]=bidimensional[k][indicecol]+mod;
				}
			}
			
		}
	}
	
}

