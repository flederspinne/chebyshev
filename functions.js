/**
 * Created by K.Taranova on 29.05.2017.
 */

// Функция создаёт массив точек на оси абсцисс на заданном промежутке с заданным интервалом
function x_axis(array, lower_endpoint, upper_endpoint, iterator) {
    let i = lower_endpoint;
    let counter = 0;
    do {
        array[counter] = i.toFixed(2);
        i += iterator;
        counter++;
    } while (i <= upper_endpoint + iterator);
}

function cheb(x, degree) {
    if (degree == 0) {
        return 1;
    } else if (degree == 1) {
        return x;
    } else {
        return (2 * x * cheb(x, degree - 1) - cheb(x, degree - 2));
    }
}