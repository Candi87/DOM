'use strict';

const formatHour = (hours, minutes, seconds) => {
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Si el segundo es par mostramos los dos puntos, de lo contrario no.
    if (seconds % 2 === 0) {
        return `${hours}:${minutes}:${seconds}`;
    } else {
        return `${hours} ${minutes} ${seconds}`;
    }
};

export { formatHour };
