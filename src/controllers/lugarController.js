import { 
  getAllLugares, 
  getLugar, 
  addLugar, 
  editLugar, 
  removeLugar 
} from '../models/lugarModel.js';

// Obtener todos
export const getLugares = async (req, res) => {
  const { data, error } = await getAllLugares();
  if (error) return res.status(500).json({ error });
  res.json(data);
};

// Obtener uno
export const getLugarById = async (req, res) => {
  const { data, error } = await getLugar(req.params.id);
  if (error) return res.status(500).json({ error });
  res.json(data);
};

// Crear
export const createLugar = async (req, res) => {
  const { nombre, descripcion, ubicacion, tipo } = req.body;
  const { data, error } = await addLugar({ nombre, descripcion, ubicacion, tipo });
  if (error) return res.status(500).json({ error });
  res.json({ message: 'Lugar agregado exitosamente', data });
};

// Actualizar
export const updateLugar = async (req, res) => {
  const { nombre, descripcion, ubicacion, tipo } = req.body;
  const { data, error } = await editLugar(req.params.id, { nombre, descripcion, ubicacion, tipo });
  if (error) return res.status(500).json({ error });
  res.json({ message: 'Lugar actualizado correctamente' });
};

// Eliminar
export const deleteLugar = async (req, res) => {
  const { error } = await removeLugar(req.params.id);
  if (error) return res.status(500).json({ error });
  res.json({ message: 'Lugar eliminado correctamente' });
};