
export interface ICita {
  id: string;
  doctorId: string;       // ID del doctor asociado
  patientId: string;      // ID del paciente asociado
  fecha: string;          // Fecha de la cita (Formato: YYYY-MM-DD)
  hora: string;           // Hora de la cita (Formato: HH:mm AM/PM)
  receta?: string;        // URL o nombre del archivo de la receta
  sintomas?: string;      // Descripción de síntomas
  confirmado?: boolean;   // Confirmación de la cita (1 = confirmado, 0 = no confirmado)
}
