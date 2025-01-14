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

/**
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante. Por ejemplo, si solo han pasado
 * 10 segundos, no debería decir ni los días, las horas ni los minutos.
 */
const dateNow = new Date ();
const timePased = (datePasado, dateNow) => {
    const date = new Date (datePasado)
    const difference = (date.getTime() - dateNow.getTime());
    const timeBetweenDates = Math.abs(difference);
     
    const days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeBetweenDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeBetweenDates % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeBetweenDates % (1000 * 60) / 1000);
   
    const prefij  = difference >= 0 ? 'Faltan' : 'Han pasado' 
    
    const time = [];
    if (days > 0) time.push(`${days} días`);
    if (hours > 0)  time.push(`${hours} horas`);
    if (minutes > 0) time.push(`${minutes} minutos`);
    if (seconds > 0) time.push(`${seconds} segundos`);
      
  return `${prefij} ${time.join(', ')}.`;
}
console.log(timePased('2024-12-13T10:14:05', dateNow));

/**
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días, las horas, los minutos o los segundos
 * Por ejemplo, si le paso { days: false, hours: false } la función debe devolver solo los minutos y los segundos que han pasado.
 */ 
const dateNow = new Date ();
const timePased = (datePasado, dateNow, remove) => {
    const date = new Date (datePasado)
    const difference = (date.getTime() - dateNow.getTime());
    const timeBetweenDates = Math.abs(difference);
     
    const days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeBetweenDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeBetweenDates % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeBetweenDates % (1000 * 60) / 1000);
   
    const prefij  = difference >= 0 ? 'Faltan' : 'Han pasado' 
    
    const time = [];
    if (days > 0 && remove.days !== false) time.push(`${days} días`);
    if (hours > 0 && remove.hours !== false)  time.push(`${hours} horas`);
    if (minutes > 0 && remove.minutes !== false) time.push(`${minutes} minutos`);
    if (seconds > 0 && remove.seconds !== false) time.push(`${seconds} segundos`);
      
  return `${prefij} ${time.join(', ')}.`;
}
console.log(timePased('2024-12-13T10:14:05', dateNow, {days: false, hours: false}));

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */
const dateNow = new Date ();
const timePased = (dateFuture, dateNow) => {
    const date = new Date (dateFuture)
    const timeBetweenDates = Math.abs(date.getTime() - dateNow.getTime());

    const days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeBetweenDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeBetweenDates % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeBetweenDates % (1000 * 60) / 1000);
    return `Quedan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos hasta ${date}`;
}
console.log(timePased('2025-01-24T13:14:13', dateNow));

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el 9 de enero durante todo el día
 */
const tasks = [
    {
      text: 'Hacer la compra',
      completed: true,
      completedAt: '2025-01-10T15:54:40.088Z'
    },
    {
      text: 'Ir a clase',
      completed: true,
      completedAt: '2025-01-09T15:00:40.088Z'
    },
    {
      text: 'Comer',
      completed: true,
      completedAt: '2025-01-09T14:00:40.088Z'
    },
    {
      text: 'Repasar javascript',
      completed: false
    }
  ];

  const checkTasks = (tasks, timeDate ) => {
    const startDay = new Date(`${timeDate}T00:00:00Z`);
    const endDay = new Date(`${timeDate}T23:59:59Z`);

    return tasks.filter(task =>{
       if (task.completed && task.completedAt) {
        const completedDate = new Date(task.completedAt);
        return completedDate >= startDay && completedDate <= endDay;
       }
       return false;
    })
  }
  const completedTasks = checkTasks(tasks, '2025-01-09');
  console.log(completedTasks);


