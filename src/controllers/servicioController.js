import * as servicioModel from '../models/servicioModel.js';

export const getServicios = async (req, res) => {
  const { data, error } = await servicioModel.getAllServicios();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const getServicioById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await servicioModel.getServicio(id);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const createServicio = async (req, res) => {
  const nuevoServicio = req.body;
  const { data, error } = await servicioModel.addServicio(nuevoServicio);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

export const updateServicio = async (req, res) => {
  const { id } = req.params;
  const servicioActualizado = req.body;
  const { data, error } = await servicioModel.editServicio(id, servicioActualizado);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Servicio actualizado correctamente' });
};

export const deleteServicio = async (req, res) => {
  const { id } = req.params;
  const { error } = await servicioModel.removeServicio(id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Servicio eliminado correctamente' });
};
