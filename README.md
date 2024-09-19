Armar una clase formacion que contega los vagones.
Armar las 3 clases de vagones
Pasajero
Carga
Dormitorio

# Infraestructura ferroviaria

Una administradora ferroviaria necesita una aplicación que le ayude a manejar las formaciones que tiene disponibles en distintos depósitos.

Una formación es lo que habitualmente llamamos "un tren", tiene una locomotora y muchos vagones

#Etapa 1 - vagones

En esta etapa vamos a considerar los vagones de cada formación.
En el modelo debemos incluir: vagones de pasajeros, vagones de carga, y vagones dormitorio.

# Vagones de pasajeros

Para definir un vagón de pasajeros, debemos indicar el largo y el ancho medidos en metros, si tiene o no baños, y si está o no ordenado.

A partir de estos valores, la cantidad de pasajeros que puede transportar un vagón se calcula de esta forma:

si el ancho es hasta 3 metros, entran 8 pasajeros por cada metro de largo.

si el ancho es de más de 3 metros, entran 10 pasajeros por cada metro de largo.

Si el vagón no está ordenado, restar 15 pasajeros.

P.ej.:

un vagón de pasajeros de 10 metros de largo y 2 de ancho puede llevar hasta 80 pasajeros si está ordenado, 65 pasajeros si no.
otro vagón, también de 10 metros de largo, pero de 4 metros de ancho, puede llevar hasta 100 pasajeros si está ordenado, 85 pasajeros si no.
La cantidad máxima de carga que puede llevar un vagón de pasajeros depende de si tiene o no baños:

si tiene baños, entonces puede llevar hasta 300 kilos.
si no, hasta 800 kilos.
El peso máximo de un vagón de pasajeros se calcula así: 2000 kilos, más 80 kilos por cada pasajero, más el máximo de carga que puede llevar.

# Vagones de carga
Para cada vagón de carga se indica su carga máxima ideal, y cuántas maderas tiene sueltas.
Un vagón de carga puede llevar hasta su carga máxima ideal, menos 400 kilos por cada madera suelta.

P.ej. un vagón de carga con carga máxima ideal 8000 kilos con 5 maderas sueltas puede llevar hasta 6000 kilos; si cambiamos la cantidad de maderas sueltas a 2, entonces puede llevar hasta 7200 kilos.

No puede llevar pasajeros, y no tiene baños.

Su peso máximo es de 1500 kilos más el máximo de carga que puede llevar.

# Vagones dormitorio
Para cada vagón dormitorio se indica: cuántos compartimientos tiene, y cuántas camas se ponen en cada compartimiento.

La cantidad máxima de pasajeros es el resultado de multiplicar cantidad de compartimientos por cantidad de camas por compartimiento. P.ej. un vagón dormitorio con 12 compartimientos de 4 camas cada uno, puede llevar hasta 48 pasajeros.

Todos los vagones dormitorio tienen baños, y pueden llevar hasta 1200 kilos de carga cada uno.

Su peso máximo se calcula así: 4000 kilos, más 80 kilos por cada pasajero, más el máximo de carga que puede llevar.

# Formación 
A partir del modelo que se construya se tiene que poder saber fácilmente, para una formación:

hasta cuántos pasajeros puede llevar.
cuántos vagones populares tiene. Un vagón es popular si puede llevar más de 50 pasajeros.
si es una formación carguera, o sea, si todos los vagones pueden transportar al menos 1000 kilos de carga.
cuál es la dispersión de pesos, que es el resultado de esta cuenta: peso máximo del vagón más pesado - peso máximo del vagón más liviano. P.ej. si una formación tiene 4 vagones, cuyos pesos máximos son 9000, 12000, 3500 y 8000, entonces su dispersión de pesos es 12000 - 3500 = 8500.
cuántos baños tiene una formación, que se obtiene como la cantidad de vagones que tienen baños (se supone que cada vagón que tiene baños, tiene uno solo).
Además, se tiene que poder hacer mantenimiento de una formación, que implica hacer mantenimiento de cada vagón, de acuerdo a estas definiciones

hacer mantenimiento de un vagón de pasajeros quiere decir ordenarlo; si no estaba ordenado pasa a estar ordenado, si ya estaba ordenado no cambia nada.
hacer mantenimiento de un vagón de carga es arreglar dos de las maderas que tiene sueltas: si tenía 5 pasa a 3, si tenía 1 pasa a 0, si tenía 0 queda en 0.
hacer mantenimiento de un vagón dormitorio no tiene ningún efecto que interese para este modelo.

# Tests etapa 1
Vamos a verificar el comportamiento de dos formaciones, y de sus vagones.

# Primera formación
Está compuesta por cuatro vagones, en este orden:

un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.
un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.
un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.
un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.
Esta tabla indica la respuesta de cada vagón a distintos pedidos

Vagón	cant. pasajeros	peso máximo	carga máxima	tiene baño
1	100	10300	300	sí
2	41	6080	800	no
3	0	6300	4800	no
4	24	7120	1200	sí
Indicamos los resultados esperados para el tren, antes y después de hacer mantenimiento.

antes	después
pasajeros	165	180
vagones populares	1	2
es carguero	no	no
dispersión de pesos	4220	3200
baños	2	2
Por qué las diferencias de valores después de hacer mantenimiento:

pasajeros: el vagón 2 pasa a estar ordenado, lo que aumenta en 15 su cantidad de pasajeros.
vagones populares: por lo recién dicho, el vagón 2 pasa de 41 a 56 pasajeros, por lo que es considerado popular.
dispersión de pesos: el vagón 2 pasa de 6080 a 7280 kilos. Por su parte, el vagón 3 pasa de 6300 a 7100 kilos. Ahora el vagón más liviano es el 3.

# Bonus para el 10 (diez) Un poco más salados
Poder pedirle a una formación lo siguiente:

si está equilbrada en pasajeros, o sea: si considerando sólo los vagones que llevan pasajeros, la diferencia entre el que más lleva y el que menos no supera los 20 pasajeros.
si está organizada, o sea: adelante los vagones que llevan pasajeros, y atrás los que no. Para esto, los vagones se tienen que almacenar en una lista. Si agregamos dos vagones que llevan pasajeros, uno que no, y después uno que sí, entonces la formación no está organizada.
¡Ojo! si todos los vagones de la formación llevan pasajeros, o si ninguno lleva, entonces la formación sí se considera organizada.
