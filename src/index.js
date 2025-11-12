import express from 'express';
import cors from 'cors';
import eventoRoutes from './routes/eventoRoutes.js';
import lugarRoutes from './routes/lugarRoutes.js';
import servicioRoutes from './routes/servicioRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando correctamente...');
});

app.use('/evento', eventoRoutes);
app.use('/lugar', lugarRoutes);
app.use('/servicio', servicioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));