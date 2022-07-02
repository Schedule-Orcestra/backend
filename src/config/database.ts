import mongoose from "mongoose"

export const database = async () => {
try{
	await mongoose.connect(process.env.DATABASE_URL ?? '')
	console.log("Conexão com o banco de dados estabelecida com sucesso")
}catch (e){
	console.log("Falha na conxão com bando de dados")
}
}


