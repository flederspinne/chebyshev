/**
 * Created by K.Taranova on 29.05.2017.
 */

// Функция создаёт массив точек на оси абсцисс на заданном промежутке с заданным интервалом
function x_axis(array, lower_endpoint, upper_endpoint, iterator) {
    let i = lower_endpoint;
    let counter = 0;
    do {
        array[counter] = i.toFixed(3);
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

function make_coeff(min, max) {
    let coeff_rand_arr = [];
    for (let i = 0; i <= DEGREE - 1; i++) {
        let rand_coefficient = Math.round(Math.random() * (max - min))  + min;
        coeff_rand_arr[i] = rand_coefficient;
    }
    return coeff_rand_arr;
}

function generate_polynomial(x, degree, coeff_rand_arr) {
    // Заранее генерить массив коэффициентов размерности DEGREE - 1 и передавать сюда в качестве параметра
    let pol = 0;

    for (let i = degree; i >= 0; i--) {
        if (degree == i) {
            pol = 1 * Math.pow(x, i);
        } else {
            pol += coeff_rand_arr[i] * Math.pow(x, i);
            // document.writeln("<br>i = " + i + " rand = " + coeff_rand_arr[i]);
        }
    }
    return pol;
}

function get_max_of_array(arr) {
    return Math.max.apply(null, arr);
}

function get_abs_of_array (y, y_abs) {
    for (let k = 0; k < y.length; k++) {
        y_abs[k] = Math.abs(y[k]);
        // document.writeln("<br> abs[" + k + "] = " + y_abs[k]);
    }
    return y_abs;
}