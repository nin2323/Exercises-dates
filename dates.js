/**
 * 1. Crea una función que sume un número de días a una fecha.
 */
const now = new Date();
const daysSumDate = (date, days) => {
    const resultDate = new Date(date);
    resultDate.setDate(resultDate.getDate() + days);  // El método setDate permite establecer el día del mes. Al sumar días, JavaScript maneja automáticamente los cambios de mes y año si es necesario
    return resultDate;
}
const resultDate = daysSumDate(now, 20);
console.log("Nueva hora: ", resultDate.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }));

/**
 * 2. Crea una función que reste un número de días a una fecha.
 */
const now = new Date();
const daysSumDate = (date, days) => {
    const resultDate = new Date(date);
    resultDate.setDate(resultDate.getDate() - days);  
    return resultDate;
}
const resultDate = daysSumDate(now, 2);
console.log("Nueva hora: ", resultDate.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }));

/**
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */
const now = new Date();
const daysSumDate = (date, {days = 0, hours = 0, minutes = 0, seconds = 0}) => { // Añadiendo los parametros que quieras sumar o restar.
    const resultDate = new Date(date);
    resultDate.setTime(resultDate.getTime() + hours * 60 * 60 * 1000);  //Sumar horas en milisegundos 
    return resultDate;
}
const resultDate = daysSumDate(now, { hours: 1 });
console.log("Nueva hora: ", resultDate.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }));

/**
 * 4.  Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */
const now = new Date();
const daysSumDate = (date, {days = 0, hours = 0, minutes = 0, seconds = 0}) => { 
    const resultDate = new Date(date);
    resultDate.setTime(resultDate.getTime() - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000) - (seconds * 1000));   
    return resultDate;
}
const resultDate = daysSumDate(now, {days: 1, hours: 1, minutes: 1, seconds: 1});
console.log(resultDate.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }));

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */
const dateBetween = (dateInicio, dateFinal, dateCheck) =>{
    if(dateCheck >= dateInicio && dateCheck <= dateFinal) {
        return 'La fecha está entre las dos fechas';
    } return 'La fecha no está entre las dos fechas';
}
console.log(dateBetween('2025-01-01', '2025-05-10', '2025-01-15'));

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos y segundos.
 * Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos desde [FECHA_INTRODUCIDA]}"
 *
 */
const dateNow = new Date ();
const timePased = (datePasado, dateNow) => {
    const date = new Date (datePasado)
    const timeBetweenDates = Math.abs(date.getTime() - dateNow.getTime());

    const days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeBetweenDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeBetweenDates % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeBetweenDates % (1000 * 60) / 1000);
    return `Han pasado ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos desde ${date}`;
}
console.log(timePased('2025-01-01', dateNow));
