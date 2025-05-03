import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//servir frontend
app.use("/", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Instancia de openai pasandole el api key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chatbot", async (req, res) => {
  const contexto = `
    Eres un asistente de soporte para el supermercado "Dieguidev".
    Información del negocio:
      - Ubicacion: Calle 2 s/n, El Agustino, Peru
      - Horario: Lunes a Sabado de 9am a 10pm, Domingos cerrado
      - Productos: Pan, Leche, Arroz, Aceite, Azucar, Sal, Harina, Fideos, Galletas, Jabón, Detergente
      - Marcas: Gloria, Nestle, Don Vittorio, Laive, Alicorp, Molitalia, La Fama, Colgate, P&G
      - Metodos de pago: Efectivo, Visa, Mastercard, American Express
    Solo puedes responder preguntas sobre la tienda. Cualquier otra pregunta esta prohibida.
  `;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
