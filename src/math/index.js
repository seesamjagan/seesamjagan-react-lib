
export const rad = deg => (deg * Math.PI) / 180;

export const deg = rad => (rad * 180) / Math.PI;

export const getX = (radius, degree, offset=0) => offset + Math.cos(rad(degree)) * radius;

export const getY = (radius, degree, offset=0) => offset + Math.sin(rad(degree)) * radius;
