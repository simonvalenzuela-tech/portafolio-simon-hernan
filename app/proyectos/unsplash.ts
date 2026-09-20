// Fotos de Unsplash: se pasa el id de la foto y el tamaño (recortada y centrada en las caras).
export const foto = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces,entropy&w=${w}&h=${h}&q=75`;
