import {
  getAllEventos,
  getEvento,
  addEvento,
  editEvento,
  removeEvento
} from '../models/eventoModel.js';

// Obtener todos los eventos
export const obtenerEventos = async (req, res) => {
  const { data, error } = await getAllEventos();
  if (error) return res.status(400).json({ error });
  res.json(data);
};

// Obtener evento por ID
export const obtenerEventoPorId = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await getEvento(id);
  if (error) return res.status(400).json({ error });
  res.json(data);
};

// Crear evento
export const crearEvento = async (req, res) => {
  const { nombre, descripcion, fecha_inicio, fecha_fin, ubicacion, lugar_id } = req.body;
  const nuevoEvento = { nombre, descripcion, fecha_inicio, fecha_fin, ubicacion, lugar_id };

  const { data, error } = await addEvento(nuevoEvento);
  if (error) return res.status(400).json({ error });
  res.status(201).json(data);
};

// Editar evento
export const actualizarEvento = async (req, res) => {
  const { id } = req.params;
  const eventoActualizado = req.body;

  const { error } = await editEvento(id, eventoActualizado);
  if (error) return res.status(400).json({ error });
  res.json({ message: 'Evento actualizado correctamente' });
};

// Eliminar evento
export const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  const { error } = await removeEvento(id);
  if (error) return res.status(400).json({ error });
  res.json({ message: 'Evento eliminado correctamente' });
};
