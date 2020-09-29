import {
  createStudent,
  getAllOwnStudents,
  addOwnStudentResult,
} from '../services/students';

export const createStudentController = async (
  names,
  lastNames,
  code,
  date,
  institute,
  country,
  city,
  user,
) => {
  try {
    const payload = {
      datos: {
        nombres: names,
        apellidos: lastNames,
        codigo: code,
        nacimiento: date,
        institucion: institute,
        pais: country,
        ciudad: city,
        instructor: user,
      },
    };
    // We catch the student to add it to the state
    const response = await createStudent(payload);
    return response.data;
  } catch (error) {
    throw new Error('Ha ocurrido un error creando al estudiante');
  }
};

export const getAllOwnStudentsController = async userEmail => {
  const payload = {
    instructor: userEmail,
  };
  const response = await getAllOwnStudents(payload);
  return response.data;
};

export const addStudentResultsController = async (
  actividad,
  codigo,
  tiempoNormal,
  datosNormal,
  tiempoReaccionNormal,
  tiempoInvertido,
  datosInvertido,
  tiempoReaccionInvertido,
  proporcionAciertos,
) => {
  try {
    const payload = {
      actividad: actividad,
      codigo: codigo,
      tiempoNormal: tiempoNormal,
      datosNormal: datosNormal,
      tiempoReaccionNormal: tiempoReaccionNormal,
      tiempoInvertido: tiempoInvertido,
      datosInvertido: datosInvertido,
      tiempoReaccionInvertido: tiempoReaccionInvertido,
      proporcionAciertos: proporcionAciertos,
    };
    // We catch the student to add it to the state
    const response = await addOwnStudentResult(payload);
    return response.data;
  } catch (error) {
    throw new Error('Ha ocurrido un error creando al estudiante');
  }
};
